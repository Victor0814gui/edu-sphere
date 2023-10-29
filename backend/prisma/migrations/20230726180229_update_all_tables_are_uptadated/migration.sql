/*
  Warnings:

  - A unique constraint covering the columns `[roleId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Material_id_key";

-- DropIndex
DROP INDEX "Matriculation_id_key";

-- DropIndex
DROP INDEX "Message_id_key";

-- DropIndex
DROP INDEX "Permission_id_key";

-- DropIndex
DROP INDEX "RefreshToken_id_key";

-- DropIndex
DROP INDEX "Role_id_key";

-- DropIndex
DROP INDEX "Room_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "User_roleId_key" ON "User"("roleId");
