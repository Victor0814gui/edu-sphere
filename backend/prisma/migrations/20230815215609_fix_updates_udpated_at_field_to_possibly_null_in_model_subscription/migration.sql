-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Subscription" (
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
INSERT INTO "new_Subscription" ("autoRenew", "billingCycle", "createdAt", "endDate", "id", "name", "nextBilling", "paymentDetails", "paymentMethod", "price", "startDate", "status", "type", "updatedAt", "userId") SELECT "autoRenew", "billingCycle", "createdAt", "endDate", "id", "name", "nextBilling", "paymentDetails", "paymentMethod", "price", "startDate", "status", "type", "updatedAt", "userId" FROM "Subscription";
DROP TABLE "Subscription";
ALTER TABLE "new_Subscription" RENAME TO "Subscription";
CREATE UNIQUE INDEX "Subscription_name_key" ON "Subscription"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
