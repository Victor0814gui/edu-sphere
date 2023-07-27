-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new__PermissionToRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PermissionToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PermissionToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__PermissionToRole" ("A", "B") SELECT "A", "B" FROM "_PermissionToRole";
DROP TABLE "_PermissionToRole";
ALTER TABLE "new__PermissionToRole" RENAME TO "_PermissionToRole";
CREATE UNIQUE INDEX "_PermissionToRole_AB_unique" ON "_PermissionToRole"("A", "B");
CREATE INDEX "_PermissionToRole_B_index" ON "_PermissionToRole"("B");
CREATE TABLE "new__RefreshTokenToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_RefreshTokenToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "RefreshToken" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RefreshTokenToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__RefreshTokenToUser" ("A", "B") SELECT "A", "B" FROM "_RefreshTokenToUser";
DROP TABLE "_RefreshTokenToUser";
ALTER TABLE "new__RefreshTokenToUser" RENAME TO "_RefreshTokenToUser";
CREATE UNIQUE INDEX "_RefreshTokenToUser_AB_unique" ON "_RefreshTokenToUser"("A", "B");
CREATE INDEX "_RefreshTokenToUser_B_index" ON "_RefreshTokenToUser"("B");
CREATE TABLE "new_Lesson" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "start" DATETIME NOT NULL,
    "end" DATETIME NOT NULL,
    "duration" INTEGER NOT NULL,
    "Type" TEXT NOT NULL,
    CONSTRAINT "Lesson_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Lesson" ("Type", "createdAt", "description", "duration", "end", "id", "roomId", "start", "title") SELECT "Type", "createdAt", "description", "duration", "end", "id", "roomId", "start", "title" FROM "Lesson";
DROP TABLE "Lesson";
ALTER TABLE "new_Lesson" RENAME TO "Lesson";
CREATE UNIQUE INDEX "Lesson_id_key" ON "Lesson"("id");
CREATE UNIQUE INDEX "Lesson_roomId_key" ON "Lesson"("roomId");
CREATE TABLE "new__LessonToMaterial" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_LessonToMaterial_A_fkey" FOREIGN KEY ("A") REFERENCES "Lesson" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LessonToMaterial_B_fkey" FOREIGN KEY ("B") REFERENCES "Material" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__LessonToMaterial" ("A", "B") SELECT "A", "B" FROM "_LessonToMaterial";
DROP TABLE "_LessonToMaterial";
ALTER TABLE "new__LessonToMaterial" RENAME TO "_LessonToMaterial";
CREATE UNIQUE INDEX "_LessonToMaterial_AB_unique" ON "_LessonToMaterial"("A", "B");
CREATE INDEX "_LessonToMaterial_B_index" ON "_LessonToMaterial"("B");
CREATE TABLE "new__RoomToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_RoomToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Room" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RoomToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__RoomToUser" ("A", "B") SELECT "A", "B" FROM "_RoomToUser";
DROP TABLE "_RoomToUser";
ALTER TABLE "new__RoomToUser" RENAME TO "_RoomToUser";
CREATE UNIQUE INDEX "_RoomToUser_AB_unique" ON "_RoomToUser"("A", "B");
CREATE INDEX "_RoomToUser_B_index" ON "_RoomToUser"("B");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "udpatedAt" DATETIME,
    "avatarUrl" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("level") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("avatarUrl", "createdAt", "email", "id", "name", "password", "roleId", "udpatedAt") SELECT "avatarUrl", "createdAt", "email", "id", "name", "password", "roleId", "udpatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new__MatriculationToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_MatriculationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Matriculation" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MatriculationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__MatriculationToUser" ("A", "B") SELECT "A", "B" FROM "_MatriculationToUser";
DROP TABLE "_MatriculationToUser";
ALTER TABLE "new__MatriculationToUser" RENAME TO "_MatriculationToUser";
CREATE UNIQUE INDEX "_MatriculationToUser_AB_unique" ON "_MatriculationToUser"("A", "B");
CREATE INDEX "_MatriculationToUser_B_index" ON "_MatriculationToUser"("B");
CREATE TABLE "new__PermissionToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PermissionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PermissionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__PermissionToUser" ("A", "B") SELECT "A", "B" FROM "_PermissionToUser";
DROP TABLE "_PermissionToUser";
ALTER TABLE "new__PermissionToUser" RENAME TO "_PermissionToUser";
CREATE UNIQUE INDEX "_PermissionToUser_AB_unique" ON "_PermissionToUser"("A", "B");
CREATE INDEX "_PermissionToUser_B_index" ON "_PermissionToUser"("B");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
