export type Job = {
  id: String
  jobCategoryId: String
  name: String
  description: String | null
  salary: PortalCategory | null
  createdAt: DateTime
  updatedAt: DateTime | null
  deletedAt: DateTime | null
  jobCategory: JobsCategory
}

export type JobsCategory = {
  id: String
  name: String
  createdAt: DateTime
  updatedAt: DateTime | null
  deletedAt: DateTime | null
  jobs: Job[]
}
