/*
  Warnings:

  - You are about to drop the column `contactEmail` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `contactNumber` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `locationCountry` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `locationPlace` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "contactEmail",
DROP COLUMN "contactNumber",
DROP COLUMN "locationCountry",
DROP COLUMN "locationPlace";
