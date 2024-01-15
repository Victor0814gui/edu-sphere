/*
  Warnings:

  - You are about to drop the column `autoRenew` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `billingCycle` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `nextBilling` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `paymentDetails` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `paymentMethod` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Product` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "priceId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "thumbnailUrl" TEXT,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME
);
INSERT INTO "new_Product" ("createdAt", "description", "id", "name", "status", "thumbnailUrl", "type", "updatedAt") SELECT "createdAt", "description", "id", "name", "status", "thumbnailUrl", "type", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
CREATE UNIQUE INDEX "Product_productId_key" ON "Product"("productId");
CREATE UNIQUE INDEX "Product_priceId_key" ON "Product"("priceId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
