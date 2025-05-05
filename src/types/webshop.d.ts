export type Order = {
  id: String
  quantity: String
  totalPrice: Decimal
  buyerFullname: String
  buyerAddress: String
  buyerPlace: String
  buyerZipCode: String
  buyerCountry: String
  buyerEmail: String
  buyerNumber?: String
  description?: String
  payment: String
  createdAt: DateTime
  deletedAt?: DateTime
  productId: String
  product: Product
}

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
