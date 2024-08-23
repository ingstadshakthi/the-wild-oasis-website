/*
  Warnings:

  - You are about to drop the `Booking` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Booking";

-- CreateTable
CREATE TABLE "Bookings" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "numNights" INTEGER,
    "numGuests" INTEGER NOT NULL,
    "cabinPrice" DOUBLE PRECISION,
    "extrasPrice" DOUBLE PRECISION,
    "totalPrice" DOUBLE PRECISION,
    "status" TEXT,
    "hasBreakfast" BOOLEAN NOT NULL DEFAULT false,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "observations" TEXT,
    "cabinId" INTEGER NOT NULL,
    "guestId" INTEGER NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id")
);
