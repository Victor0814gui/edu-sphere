-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME,
    "avatarUrl" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("avatarUrl", "createdAt", "email", "id", "name", "password", "status", "updatedAt") SELECT "avatarUrl", "createdAt", "email", "id", "name", "password", "status", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE INDEX "User_id_idx" ON "User"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
