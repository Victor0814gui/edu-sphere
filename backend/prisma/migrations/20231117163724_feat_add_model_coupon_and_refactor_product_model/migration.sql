-- CreateTable
CREATE TABLE "Coupon" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL,
    "startDate" DATETIME,
    "endDate" DATETIME,
    "paymentMethod" TEXT,
    "price" INTEGER NOT NULL,
    "billingCycle" TEXT,
    "nextBilling" DATETIME,
    "autoRenew" BOOLEAN,
    "paymentDetails" TEXT,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME
);
INSERT INTO "new_Product" ("autoRenew", "billingCycle", "createdAt", "description", "endDate", "id", "name", "nextBilling", "paymentDetails", "paymentMethod", "price", "startDate", "status", "type", "updatedAt") SELECT "autoRenew", "billingCycle", "createdAt", "description", "endDate", "id", "name", "nextBilling", "paymentDetails", "paymentMethod", "price", "startDate", "status", "type", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
