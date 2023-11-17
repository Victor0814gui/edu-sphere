-- AlterTable
ALTER TABLE "Product" ADD COLUMN "description" TEXT;

-- CreateTable
CREATE TABLE "Attribute" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "description" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Attribute_content_key" ON "Attribute"("content");
