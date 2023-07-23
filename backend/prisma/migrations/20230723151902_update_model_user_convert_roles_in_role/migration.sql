/*
  Warnings:

  - You are about to drop the `_RoleToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_RoleToUser_B_index";

-- DropIndex
DROP INDEX "_RoleToUser_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_RoleToUser";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createtAt" DATETIME NOT NULL,
    "udpatedAt" DATETIME,
    "avatarUrl" TEXT NOT NULL,
    CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("avatarUrl", "createtAt", "email", "id", "name", "password", "udpatedAt") SELECT "avatarUrl", "createtAt", "email", "id", "name", "password", "udpatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
