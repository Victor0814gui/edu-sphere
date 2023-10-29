-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updateAt" DATETIME
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createtAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rooms" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "createAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lesson" (
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

-- CreateTable
CREATE TABLE "Matriculation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "studentId" TEXT NOT NULL,
    "romId" TEXT NOT NULL,
    "createAd" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Material" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME
);

-- CreateTable
CREATE TABLE "_RoomToStudent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_RoomToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Room" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RoomToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LessonToMaterial" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_LessonToMaterial_A_fkey" FOREIGN KEY ("A") REFERENCES "Lesson" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LessonToMaterial_B_fkey" FOREIGN KEY ("B") REFERENCES "Material" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_MatriculationToStudent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_MatriculationToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Matriculation" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MatriculationToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Room_id_key" ON "Room"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Student_id_key" ON "Student"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_id_key" ON "Teacher"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Message_id_key" ON "Message"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_id_key" ON "Lesson"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_roomId_key" ON "Lesson"("roomId");

-- CreateIndex
CREATE UNIQUE INDEX "Matriculation_id_key" ON "Matriculation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Material_id_key" ON "Material"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_RoomToStudent_AB_unique" ON "_RoomToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_RoomToStudent_B_index" ON "_RoomToStudent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LessonToMaterial_AB_unique" ON "_LessonToMaterial"("A", "B");

-- CreateIndex
CREATE INDEX "_LessonToMaterial_B_index" ON "_LessonToMaterial"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MatriculationToStudent_AB_unique" ON "_MatriculationToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_MatriculationToStudent_B_index" ON "_MatriculationToStudent"("B");
