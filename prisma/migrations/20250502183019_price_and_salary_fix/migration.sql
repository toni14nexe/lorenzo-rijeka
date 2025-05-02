/*
  Warnings:

  - You are about to drop the column `salary` on the `Product` table. All the data in the column will be lost.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "salary",
ADD COLUMN     "price" DECIMAL(10,2) NOT NULL;
