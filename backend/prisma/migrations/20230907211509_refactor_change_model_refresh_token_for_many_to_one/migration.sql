/*
  Warnings:

  - You are about to drop the `_RefreshTokenToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - Added the required column `customerId` to the `RefreshToken` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_RefreshTokenToUser_B_index";

-- DropIndex
DROP INDEX "_RefreshTokenToUser_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_RefreshTokenToUser";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RefreshToken" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "refreshToken" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "expiryDate" DATETIME NOT NULL,
    "customerId" TEXT NOT NULL,
    CONSTRAINT "RefreshToken_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RefreshToken" ("expiryDate", "id", "refreshToken", "state") SELECT "expiryDate", "id", "refreshToken", "state" FROM "RefreshToken";
DROP TABLE "RefreshToken";
ALTER TABLE "new_RefreshToken" RENAME TO "RefreshToken";
CREATE UNIQUE INDEX "RefreshToken_refreshToken_key" ON "RefreshToken"("refreshToken");
CREATE UNIQUE INDEX "RefreshToken_customerId_key" ON "RefreshToken"("customerId");
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "billingCycle" TEXT NOT NULL,
    "nextBilling" DATETIME NOT NULL,
    "autoRenew" BOOLEAN NOT NULL,
    "paymentDetails" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_Product" ("autoRenew", "billingCycle", "createdAt", "endDate", "id", "name", "nextBilling", "paymentDetails", "paymentMethod", "price", "startDate", "status", "type", "updatedAt", "userId") SELECT "autoRenew", "billingCycle", "createdAt", "endDate", "id", "name", "nextBilling", "paymentDetails", "paymentMethod", "price", "startDate", "status", "type", "updatedAt", "userId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
