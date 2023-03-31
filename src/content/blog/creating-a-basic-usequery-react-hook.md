---
title: Creating a Basic 'useQuery' React Hook
description: A brief look into React hooks and how to create a custom data fetching hook.
heroImage: https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2027&q=80
pubDate: 2021-01-26T23:51:00.000Z
---
Often times when creating a React application that fetches data, I find myself repeating the same fetch logic in multiple components. In order to make my code more DRY *(Don't Repeat Yourself)*, I decided to extract this logic into one reusable custom hook.

# An example component before the custom hook
```typescript
import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

// type data from https://jsonplaceholder.typicode.com/posts
type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>()
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])

  if (error) {
    return <p>Error: {error}</p>
  } else if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      {posts.map(({ title, body }, index) => (
        <Fragment key={index}>
          <h1>{title}</h1>
          <p>{body}</p>
        </Fragment>
      ))}
    </>
  )
}
```
The logic in the **Posts** component above allows for a reactive component that shows posts they are loaded, when posts are still loading, and when there is an error fetching the posts. However, if another component need the same logic, like a list of users, that component would need to copy this logic.
***
# What are hooks?
Hooks are simply functions that have access to other React hooks like **useState** and **useEffect**. Unlike components, hooks can return whatever they want. This functionality is exactly what allows us to pull our data fetching logic into one reusable place.

# Making a 'useQuery' Hook
```typescript
import { useState, useEffect, useCallback } from 'react'
import axios, { AxiosResponse } from 'axios'

export default function useQuery<T>(url: string) {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)

  const handleError = (error: any) => {
    setError(error.response?.data.err)
    setLoading(false)
  }

  // this function is calling useCallback to stop an infinite loop since it is in the dependency array of useEffect
  const runQuery = useCallback(() => {
    const handleSuccess = (res: AxiosResponse<T>) => {
      setData(res.data)
      setLoading(false)
    }

    setLoading(true)
    axios.get<T>(url).then(handleSuccess).catch(handleError)
  }, [url])

  useEffect(() => {
    runQuery()
  }, [runQuery])

  return { data, loading, error, refetch: runQuery }
}
```
This new hook allows us to fetch data from an API, while checking for errors and whether or not it's still loading just like in the **Posts** component above! To briefly explain how it works, when the hook is first mounted it will call **runQuery** enabled by the **useEffect** hook. The **runQuery** function uses [axios](https://www.npmjs.com/package/axios) to call the url passed into the hook and sets the **data**, **loading**, and **error** states depending on the API's response like in the **Posts** component's **useEffect** call. Then, the hook returns an object containing the **data**, **loading**, and **error** states as well the **runQuery** function renamed to **refetch** in case a component needs to get the data again.
***

# Using 'useQuery' in the Posts component
```typescript
import { Fragment } from 'react'
import useQuery from './useQuery'

// type data from https://jsonplaceholder.typicode.com/posts
type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export default function Posts() {
  const { data: posts, loading, error } = useQuery<Post[]>('https://jsonplaceholder.typicode.com/posts')

  if (error) {
    return <p>Error: {error}</p>
  } else if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      {posts.map(({ title, body }, index) => (
        <Fragment key={index}>
          <h1>{title}</h1>
          <p>{body}</p>
        </Fragment>
      ))}
    </>
  )
}
```
As seen above, the **Posts** component is now much cleaner. Instead of calling **useState** three times, only one call to the new **useQuery** hook is needed. All that's required is a url string to be passed in as well as an optional generic type to make the returned data typed. Then after destructuring the returned object into separate **posts**, **error**, and **loading** constants, all the logic below should remain the same. This is great, but what is more valuable is the fact that this hook can now be used in all of our components! If a user list component was needed, as mentioned above, **useQuery** could be used again just like in the **Posts** component giving that **Users** component access to it's own **data**, **loading**, and **error** states.
***
# Conclusion
I was pleasantly surprised how easy it was to make my own custom React hook. It took a little more work and time upfront but now have a reusable hook that I can use in any React application I build in the future!