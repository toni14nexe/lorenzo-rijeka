export type News = {
  id: String
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
  id: String
  name: String
  parentId: String | null
  parent: PortalCategory | null
  children: PortalCategory[]
  createdAt: DateTime
  updatedAt: DateTime | null
  deletedAt: DateTime | null
  news: News[]
}
