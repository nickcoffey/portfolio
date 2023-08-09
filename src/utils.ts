export const getFormattedDate = (date: string) => new Date(date).toLocaleDateString()

export function getPageTitle(subtitle?: string) {
  let title = 'Nick Coffey'
  if (subtitle) {
    title = `${subtitle} | ${title}`
  }
  return title
}
