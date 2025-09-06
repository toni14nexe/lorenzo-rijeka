export type Order = {
  id: String
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
  shipping: String
  list: {
    id: string
    name: string
    image: string
    price: number
    quantity: number
    totalPrice: number
  }[]
  createdAt: DateTime
  deletedAt?: DateTime
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
  parentId: String | null
  image: String | null
  parent: PortalCategory | null
  children: PortalCategory[]
  createdAt: DateTime
  updatedAt: DateTime | null
  deletedAt: DateTime | null
  products: Product[]
}
