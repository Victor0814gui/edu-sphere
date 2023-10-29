/*
  Warnings:

  - You are about to drop the column `Type` on the `Lesson` table. All the data in the column will be lost.
  - Added the required column `type` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lesson" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "start" DATETIME NOT NULL,
    "end" DATETIME NOT NULL,
    "duration" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "Lesson_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Lesson" ("createdAt", "description", "duration", "end", "id", "roomId", "slug", "start", "title") SELECT "createdAt", "description", "duration", "end", "id", "roomId", "slug", "start", "title" FROM "Lesson";
DROP TABLE "Lesson";
ALTER TABLE "new_Lesson" RENAME TO "Lesson";
CREATE UNIQUE INDEX "Lesson_id_key" ON "Lesson"("id");
CREATE UNIQUE INDEX "Lesson_slug_key" ON "Lesson"("slug");
CREATE UNIQUE INDEX "Lesson_title_key" ON "Lesson"("title");
CREATE UNIQUE INDEX "Lesson_roomId_key" ON "Lesson"("roomId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
