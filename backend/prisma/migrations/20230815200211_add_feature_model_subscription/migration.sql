/*
  Warnings:

  - You are about to alter the column `createdAt` on the `Lesson` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "paymentIntent" TEXT,
    "subscriptionId" TEXT,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Penalty" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "reason" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "_PermissionToSubscription" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PermissionToSubscription_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PermissionToSubscription_B_fkey" FOREIGN KEY ("B") REFERENCES "Subscription" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PenaltyToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PenaltyToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Penalty" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PenaltyToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lesson" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "start" DATETIME NOT NULL,
    "end" DATETIME NOT NULL,
    "duration" INTEGER NOT NULL,
    "Type" TEXT NOT NULL,
    CONSTRAINT "Lesson_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Lesson" ("Type", "createdAt", "description", "duration", "end", "id", "roomId", "start", "title") SELECT "Type", "createdAt", "description", "duration", "end", "id", "roomId", "start", "title" FROM "Lesson";
DROP TABLE "Lesson";
ALTER TABLE "new_Lesson" RENAME TO "Lesson";
CREATE UNIQUE INDEX "Lesson_id_key" ON "Lesson"("id");
CREATE UNIQUE INDEX "Lesson_roomId_key" ON "Lesson"("roomId");
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
    CONSTRAINT "User_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("avatarUrl", "createdAt", "email", "id", "name", "password", "roleName", "udpatedAt") SELECT "avatarUrl", "createdAt", "email", "id", "name", "password", "roleName", "udpatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE INDEX "User_id_idx" ON "User"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionToSubscription_AB_unique" ON "_PermissionToSubscription"("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionToSubscription_B_index" ON "_PermissionToSubscription"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PenaltyToUser_AB_unique" ON "_PenaltyToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PenaltyToUser_B_index" ON "_PenaltyToUser"("B");
