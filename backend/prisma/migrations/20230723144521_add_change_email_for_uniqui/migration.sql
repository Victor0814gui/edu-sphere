/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `closed` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `published` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Role" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME
);
INSERT INTO "new_Role" ("createdAt", "description", "id", "level", "name", "updatedAt") SELECT "createdAt", "description", "id", "level", "name", "updatedAt" FROM "Role";
DROP TABLE "Role";
ALTER TABLE "new_Role" RENAME TO "Role";
CREATE UNIQUE INDEX "Role_id_key" ON "Role"("id");
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");
CREATE UNIQUE INDEX "Role_level_key" ON "Role"("level");
CREATE TABLE "new_Room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "closed" BOOLEAN NOT NULL,
    "updateAt" DATETIME
);
INSERT INTO "new_Room" ("createdAt", "description", "id", "name", "teacherId", "type", "updateAt") SELECT "createdAt", "description", "id", "name", "teacherId", "type", "updateAt" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
CREATE UNIQUE INDEX "Room_id_key" ON "Room"("id");
CREATE TABLE "new_Permission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    "updatedAt" DATETIME
);
INSERT INTO "new_Permission" ("createdAt", "description", "id", "level", "name", "updatedAt") SELECT "createdAt", "description", "id", "level", "name", "updatedAt" FROM "Permission";
DROP TABLE "Permission";
ALTER TABLE "new_Permission" RENAME TO "Permission";
CREATE UNIQUE INDEX "Permission_id_key" ON "Permission"("id");
CREATE UNIQUE INDEX "Permission_name_key" ON "Permission"("name");
CREATE UNIQUE INDEX "Permission_level_key" ON "Permission"("level");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
