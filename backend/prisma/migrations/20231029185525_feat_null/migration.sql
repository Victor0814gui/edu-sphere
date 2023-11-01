/*
  Warnings:

  - You are about to drop the column `userId` on the `Tag` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL
);
INSERT INTO "new_Tag" ("createdAt", "description", "id", "label") SELECT "createdAt", "description", "id", "label" FROM "Tag";
DROP TABLE "Tag";
ALTER TABLE "new_Tag" RENAME TO "Tag";
CREATE UNIQUE INDEX "Tag_label_key" ON "Tag"("label");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
