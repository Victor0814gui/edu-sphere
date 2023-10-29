/*
  Warnings:

  - You are about to drop the column `userId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `Room` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "startDate" DATETIME,
    "endDate" DATETIME,
    "paymentMethod" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "billingCycle" TEXT NOT NULL,
    "nextBilling" DATETIME NOT NULL,
    "autoRenew" BOOLEAN NOT NULL,
    "paymentDetails" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME
);
INSERT INTO "new_Product" ("autoRenew", "billingCycle", "createdAt", "endDate", "id", "name", "nextBilling", "paymentDetails", "paymentMethod", "price", "startDate", "status", "type", "updatedAt") SELECT "autoRenew", "billingCycle", "createdAt", "endDate", "id", "name", "nextBilling", "paymentDetails", "paymentMethod", "price", "startDate", "status", "type", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
CREATE TABLE "new_Room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME,
    "closed" BOOLEAN NOT NULL
);
INSERT INTO "new_Room" ("closed", "createdAt", "description", "id", "published", "slug", "title", "type", "updatedAt") SELECT "closed", "createdAt", "description", "id", "published", "slug", "title", "type", "updatedAt" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
