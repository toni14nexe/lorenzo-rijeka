-- CreateTable
CREATE TABLE "Ad" (
    "id" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "positionDescription" TEXT,
    "url" TEXT,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Ad_pkey" PRIMARY KEY ("id")
);
