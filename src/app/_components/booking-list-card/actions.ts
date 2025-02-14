"use server";

import { BookingsListData } from "@/lib/types";

export const getBookingsByRoomingListId = async (
  id: number,
): Promise<BookingsListData> => {
  const res = await fetch(
    `http://localhost:3000/bookings/byRoomingListId/${id}`,
    { method: "GET" },
  );

  const data: BookingsListData = await res.json();

  return data;
};
