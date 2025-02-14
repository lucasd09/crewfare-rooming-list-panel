export type Booking = {
  bookingId: number;
  hotelId: number;
  eventId: number;
  guestName: string;
  guestPhoneNumber: string;
  checkInDate: string;
  checkOutDate: string;
};

export type RoomingList = {
  rooming_list_id: number;
  event_id: number;
  event_name: string;
  hotel_id: number;
  rfp_name: string;
  cut_off_date: string;
  status: "completed" | "received" | "archived" | "Confirmed";
  agreement_type: "leisure" | "staff";
};

export type RoomingListBooking = {
  roomingListId: number;
  bookingId: number;
};

export type RoomingListData = {
  eventId: number;
  eventName: string;
  roomingCount: number;
  roomingLists: RoomingList[];
};

export type BookingsListData = {
  minDate: string;
  maxDate: string;
  bookingsCount: number;
  bookings: Booking[];
};
