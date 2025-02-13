import { Rfp } from "@/lib/types";

export type BookingListProps = {
  event: { name: string; rfps: Rfp[] };
};
