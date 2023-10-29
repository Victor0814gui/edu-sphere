/*
  Warnings:

  - You are about to drop the column `createAt` on the `Message` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Message" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL
);
INSERT INTO "new_Message" ("authorId", "content", "id", "roomId") SELECT "authorId", "content", "id", "roomId" FROM "Message";
DROP TABLE "Message";
ALTER TABLE "new_Message" RENAME TO "Message";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
