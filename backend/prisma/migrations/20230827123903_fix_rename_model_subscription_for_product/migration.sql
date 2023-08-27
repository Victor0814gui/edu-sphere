/*
  Warnings:

  - You are about to drop the `Subscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PermissionToSubscription` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Subscription_name_key";

-- DropIndex
DROP INDEX "_PermissionToSubscription_B_index";

-- DropIndex
DROP INDEX "_PermissionToSubscription_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Subscription";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_PermissionToSubscription";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "billingCycle" TEXT NOT NULL,
    "nextBilling" DATETIME NOT NULL,
    "autoRenew" BOOLEAN NOT NULL,
    "paymentDetails" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);

-- CreateTable
CREATE TABLE "_PermissionToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PermissionToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PermissionToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "paymentIntent" TEXT,
    "subscriptionId" TEXT,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Transaction" ("amount", "createdAt", "currency", "id", "paymentIntent", "status", "subscriptionId", "userId") SELECT "amount", "createdAt", "currency", "id", "paymentIntent", "status", "subscriptionId", "userId" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "udpatedAt" DATETIME,
    "avatarUrl" TEXT NOT NULL,
    "roleName" TEXT NOT NULL,
    "subscriptionId" TEXT,
    CONSTRAINT "User_roleName_fkey" FOREIGN KEY ("roleName") REFERENCES "Role" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("avatarUrl", "createdAt", "email", "id", "name", "password", "roleName", "subscriptionId", "udpatedAt") SELECT "avatarUrl", "createdAt", "email", "id", "name", "password", "roleName", "subscriptionId", "udpatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE INDEX "User_id_idx" ON "User"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionToProduct_AB_unique" ON "_PermissionToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionToProduct_B_index" ON "_PermissionToProduct"("B");
