export type News = {
  id: string
  categoryId: String
  title: String
  author: String
  text: String
  images: String[]
  videos: String[]
  createdAt: DateTime
  updatedAt: DateTime | null
  deletedAt: DateTime | null
  category: PortalCategory
}

export type PortalCategory = {
  id: string
  name: string
  parentId: string | null
  parent: PortalCategory | null
  children: PortalCategory[]
  createdAt: DateTime
  updatedAt: DateTime | null
  deletedAt: DateTime | null
  news: News[]
}
