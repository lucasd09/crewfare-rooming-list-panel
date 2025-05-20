"use server";

import { env } from "@/lib/env";
import roomingListsJSON from "../data/rooming-lists.json";
import bookingsJSON from "../data/bookings.json";
import roomingListBookingsJSON from "../data/rooming-list-bookings.json";
import { Booking } from "@/models/booking";
import { RoomingList } from "@/models/rooming-list";
import { RoomingListData } from "@/models/rooming-list-data";
import { SearchFilters } from "@/models/search-filters";

export const getRoomingListData = async (searchParams?: { searchTerm?: string; filters?: SearchFilters }): Promise<RoomingListData[]> => {
  const queryParams = new URLSearchParams();
  
  if (searchParams?.searchTerm) {
    queryParams.append('search', searchParams.searchTerm);
  }
  
  if (searchParams?.filters) {
    queryParams.append('active', String(searchParams.filters.active));
    queryParams.append('closed', String(searchParams.filters.closed));
    queryParams.append('cancelled', String(searchParams.filters.cancelled));
  }

  console.log(queryParams.toString());
  
  const res = await fetch(`${env.API_URL}/roomingLists/getListData?${queryParams.toString()}`, {
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
