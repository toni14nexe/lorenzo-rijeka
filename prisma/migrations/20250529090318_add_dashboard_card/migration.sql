-- CreateTable
CREATE TABLE "DashboardCard" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "position" INTEGER,
    "text" TEXT NOT NULL,

    CONSTRAINT "DashboardCard_pkey" PRIMARY KEY ("id")
);
