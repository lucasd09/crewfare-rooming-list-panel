export type Rfp = {
  id: number;
  name: string;
  agreement_type: string;
  cut_off_date: number;
  bookings: number;
};

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
  agreement_type: "leisure" | "staff";
};

export type RoomingListBooking = {
  roomingListId: number;
  bookingId: number;
};
