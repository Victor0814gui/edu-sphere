-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RefreshToken" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "refreshToken" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "expiryDate" DATETIME NOT NULL
);
INSERT INTO "new_RefreshToken" ("expiryDate", "id", "refreshToken", "state") SELECT "expiryDate", "id", "refreshToken", "state" FROM "RefreshToken";
DROP TABLE "RefreshToken";
ALTER TABLE "new_RefreshToken" RENAME TO "RefreshToken";
CREATE UNIQUE INDEX "RefreshToken_id_key" ON "RefreshToken"("id");
CREATE UNIQUE INDEX "RefreshToken_refreshToken_key" ON "RefreshToken"("refreshToken");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
