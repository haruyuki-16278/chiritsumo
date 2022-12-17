export interface Category {
  iconUrl: string
  name: string
  isComplete: boolean
  missions: {
    beanKnowledges: string[]
    title: string
  }[]
}
