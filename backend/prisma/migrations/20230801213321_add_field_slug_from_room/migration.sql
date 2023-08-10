/*
  Warnings:

  - Added the required column `slug` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME,
    "closed" BOOLEAN NOT NULL
);
INSERT INTO "new_Room" ("closed", "createdAt", "description", "id", "published", "teacherId", "title", "type", "updatedAt") SELECT "closed", "createdAt", "description", "id", "published", "teacherId", "title", "type", "updatedAt" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
CREATE UNIQUE INDEX "Room_title_key" ON "Room"("title");
CREATE UNIQUE INDEX "Room_slug_key" ON "Room"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
