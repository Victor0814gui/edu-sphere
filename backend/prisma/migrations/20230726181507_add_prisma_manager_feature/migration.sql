-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new__PermissionToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);
INSERT INTO "new__PermissionToUser" ("A", "B") SELECT "A", "B" FROM "_PermissionToUser";
DROP TABLE "_PermissionToUser";
ALTER TABLE "new__PermissionToUser" RENAME TO "_PermissionToUser";
CREATE UNIQUE INDEX "_PermissionToUser_AB_unique" ON "_PermissionToUser"("A", "B");
CREATE INDEX "_PermissionToUser_B_index" ON "_PermissionToUser"("B");
CREATE TABLE "new__RoomToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);
INSERT INTO "new__RoomToUser" ("A", "B") SELECT "A", "B" FROM "_RoomToUser";
DROP TABLE "_RoomToUser";
ALTER TABLE "new__RoomToUser" RENAME TO "_RoomToUser";
CREATE UNIQUE INDEX "_RoomToUser_AB_unique" ON "_RoomToUser"("A", "B");
CREATE INDEX "_RoomToUser_B_index" ON "_RoomToUser"("B");
CREATE TABLE "new_Lesson" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "start" DATETIME NOT NULL,
    "end" DATETIME NOT NULL,
    "duration" INTEGER NOT NULL,
    "Type" TEXT NOT NULL
);
INSERT INTO "new_Lesson" ("Type", "createdAt", "description", "duration", "end", "id", "roomId", "start", "title") SELECT "Type", "createdAt", "description", "duration", "end", "id", "roomId", "start", "title" FROM "Lesson";
DROP TABLE "Lesson";
ALTER TABLE "new_Lesson" RENAME TO "Lesson";
CREATE UNIQUE INDEX "Lesson_id_key" ON "Lesson"("id");
CREATE UNIQUE INDEX "Lesson_roomId_key" ON "Lesson"("roomId");
CREATE TABLE "new__MatriculationToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);
INSERT INTO "new__MatriculationToUser" ("A", "B") SELECT "A", "B" FROM "_MatriculationToUser";
DROP TABLE "_MatriculationToUser";
ALTER TABLE "new__MatriculationToUser" RENAME TO "_MatriculationToUser";
CREATE UNIQUE INDEX "_MatriculationToUser_AB_unique" ON "_MatriculationToUser"("A", "B");
CREATE INDEX "_MatriculationToUser_B_index" ON "_MatriculationToUser"("B");
CREATE TABLE "new__RefreshTokenToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);
INSERT INTO "new__RefreshTokenToUser" ("A", "B") SELECT "A", "B" FROM "_RefreshTokenToUser";
DROP TABLE "_RefreshTokenToUser";
ALTER TABLE "new__RefreshTokenToUser" RENAME TO "_RefreshTokenToUser";
CREATE UNIQUE INDEX "_RefreshTokenToUser_AB_unique" ON "_RefreshTokenToUser"("A", "B");
CREATE INDEX "_RefreshTokenToUser_B_index" ON "_RefreshTokenToUser"("B");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "udpatedAt" DATETIME,
    "avatarUrl" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL
);
INSERT INTO "new_User" ("avatarUrl", "createdAt", "email", "id", "name", "password", "roleId", "udpatedAt") SELECT "avatarUrl", "createdAt", "email", "id", "name", "password", "roleId", "udpatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_roleId_key" ON "User"("roleId");
CREATE INDEX "User_id_idx" ON "User"("id");
CREATE TABLE "new__PermissionToRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);
INSERT INTO "new__PermissionToRole" ("A", "B") SELECT "A", "B" FROM "_PermissionToRole";
DROP TABLE "_PermissionToRole";
ALTER TABLE "new__PermissionToRole" RENAME TO "_PermissionToRole";
CREATE UNIQUE INDEX "_PermissionToRole_AB_unique" ON "_PermissionToRole"("A", "B");
CREATE INDEX "_PermissionToRole_B_index" ON "_PermissionToRole"("B");
CREATE TABLE "new__LessonToMaterial" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);
INSERT INTO "new__LessonToMaterial" ("A", "B") SELECT "A", "B" FROM "_LessonToMaterial";
DROP TABLE "_LessonToMaterial";
ALTER TABLE "new__LessonToMaterial" RENAME TO "_LessonToMaterial";
CREATE UNIQUE INDEX "_LessonToMaterial_AB_unique" ON "_LessonToMaterial"("A", "B");
CREATE INDEX "_LessonToMaterial_B_index" ON "_LessonToMaterial"("B");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
