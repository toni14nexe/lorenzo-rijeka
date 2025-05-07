export type Ad = {
  id: String
  position: String
  positionDescription?: String
  url?: String
  imageUrl: String
}

export type AdSettings = {
  id: String
  position: String
  show: Boolean
}

export type DashboardSideAds = {
  left: Ad
  right: Ad
}
