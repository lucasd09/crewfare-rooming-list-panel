"use server";

import { RoomingListData } from "@/lib/types";

export const getRoomingLists = async (): Promise<RoomingListData[]> => {
  const res = await fetch("http://localhost:3000/roomingLists", {
    method: "GET",
  });

  const data = await res.json();

  return data;
};
