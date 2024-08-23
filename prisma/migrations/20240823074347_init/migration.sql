-- CreateTable
CREATE TABLE "Cabins" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "maxCapacity" INTEGER NOT NULL,
    "regularPrice" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Cabins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guests" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nationalID" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "countryFlag" TEXT NOT NULL,

    CONSTRAINT "Guests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
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

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Settings" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "minBookingLength" INTEGER NOT NULL,
    "maxBookingLength" INTEGER NOT NULL,
    "maxGuestsPerBooking" INTEGER NOT NULL,
    "breakfastPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);
