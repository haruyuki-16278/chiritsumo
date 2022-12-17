export interface Category {
  iconUrl: string
  name: string
  isComplete: boolean
  missions: Mission[]
}

export interface Mission {
  beanKnowledges: string[]
  title: string
}
