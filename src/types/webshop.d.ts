export type Product = {
  id: String
  productCategoryId: String
  name: String
  description: String | null
  price: PortalCategory | null
  locationPlace: String
  locationCountry: String
  contactEmail: String
  contactNumber?: String
  sold: Number
  images: String[]
  videos: String[]
  createdAt: DateTime
  updatedAt: DateTime | null
  deletedAt: DateTime | null
  productCategory: JobsCategory
}

export type ProductCategory = {
  id: String
  name: String
  createdAt: DateTime
  updatedAt: DateTime | null
  deletedAt: DateTime | null
  products: Product[]
}
