"use server";

import { env } from "@/lib/env";
import { Booking, RoomingList, RoomingListData } from "@/lib/types";
import roomingListsJSON from "../data/rooming-lists.json";
import bookingsJSON from "../data/bookings.json";
import roomingListBookingsJSON from "../data/rooming-list-bookings.json";

export const getRoomingListData = async (): Promise<RoomingListData[]> => {
  const res = await fetch(`${env.API_URL}/roomingLists/getListData`, {
    method: "GET",
  });

  const data = await res.json();

  return data;
};

export const getBookings = async (): Promise<Booking[]> => {
  const res = await fetch(`${env.API_URL}/bookings`, {
    method: "GET",
  });

  const data = await res.json();

  return data;
};

export const getRoomingLists = async (): Promise<RoomingList[]> => {
  const res = await fetch(`${env.API_URL}/roomingLists`, {
    method: "GET",
  });

  const data = await res.json();

  return data;
};

export const insertRoomingLists = async () => {
  const body = JSON.stringify(roomingListsJSON);

  const res = await fetch(`${env.API_URL}/roomingLists/bulk`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await res.json();

  return data;
};

export const insertBookings = async () => {
  const body = JSON.stringify(bookingsJSON);

  const res = await fetch(`${env.API_URL}/bookings/bulk`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await res.json();

  return data;
};

export const insertRoomingListBookings = async () => {
  const body = JSON.stringify(roomingListBookingsJSON);

  const res = await fetch(`${env.API_URL}/roomingListBooking/bulk`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await res.json();

  return data;
};

export const removeAllRoomingLists = async () => {
  const roomingLists = await getRoomingLists();
  const ids = roomingLists.map((roomingList) => roomingList.roomingListId);

  const body = JSON.stringify(ids);

  const res = await fetch(`${env.API_URL}/roomingLists/deleteBulk/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await res.ok;

  return data;
};

export const removeAllBookings = async () => {
  const bookings = await getBookings();
  const ids = bookings.map((booking) => booking.bookingId);

  const body = JSON.stringify(ids);

  const res = await fetch(`${env.API_URL}/bookings/deleteBulk/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await res.ok;

  return data;
};
