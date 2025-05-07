/*
  Warnings:

  - The `price` column on the `Ad` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Ad" DROP COLUMN "price",
ADD COLUMN     "price" DECIMAL(10,2);
