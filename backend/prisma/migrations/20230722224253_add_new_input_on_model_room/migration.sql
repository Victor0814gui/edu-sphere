/*
  Warnings:

  - Added the required column `type` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updateAt" DATETIME
);
INSERT INTO "new_Room" ("createdAt", "description", "id", "name", "teacherId", "updateAt") SELECT "createdAt", "description", "id", "name", "teacherId", "updateAt" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
CREATE UNIQUE INDEX "Room_id_key" ON "Room"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
