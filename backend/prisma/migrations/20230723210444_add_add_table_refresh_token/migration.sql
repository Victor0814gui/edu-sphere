-- CreateTable
CREATE TABLE "RefreshToken" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "refreshToken" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL,
    "expiryDate" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_RefreshTokenToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_RefreshTokenToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "RefreshToken" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RefreshTokenToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_id_key" ON "RefreshToken"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_refreshToken_key" ON "RefreshToken"("refreshToken");

-- CreateIndex
CREATE UNIQUE INDEX "_RefreshTokenToUser_AB_unique" ON "_RefreshTokenToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RefreshTokenToUser_B_index" ON "_RefreshTokenToUser"("B");
