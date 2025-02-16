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
  roomingListId: number;
  eventId: number;
  eventName: string;
  hotelId: number;
  rfpName: string;
  cutOffDate: string;
  status: "completed" | "received" | "archived" | "Confirmed";
  agreementType: "leisure" | "staff";
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
