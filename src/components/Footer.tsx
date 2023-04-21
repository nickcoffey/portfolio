const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <>
      <p>&copy; {currentYear} Nick Coffey. All rights reserved.</p>
    </>
  )
}
