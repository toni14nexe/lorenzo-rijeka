-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "contactEmail" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "contactNumber" TEXT,
ADD COLUMN     "locationCountry" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "locationPlace" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "sold" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "totalPrice" DECIMAL(10,2) NOT NULL,
    "buyerFullname" TEXT NOT NULL,
    "buyerAddress" TEXT NOT NULL,
    "buyerPlace" TEXT NOT NULL,
    "buyerCountry" TEXT NOT NULL,
    "buyerEmail" TEXT NOT NULL,
    "buyerNumber" TEXT,
    "description" TEXT,
    "payment" TEXT NOT NULL DEFAULT 'Pouzećem',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "productId" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
