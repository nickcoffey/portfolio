import { createClient } from '@supabase/supabase-js'
import type { Database } from './generated-types'

export type Post = Database['public']['Tables']['posts']['Row']

export const supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
