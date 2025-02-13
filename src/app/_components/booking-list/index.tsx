import { Badge } from "@/components/badge"
import { BookingCard } from "../booking-card"
import { BookingListProps } from "./types"

export const BookingList = ({ event }: BookingListProps) => {
  return <>
    <div className="flex itens center gap-2 items-center">
      <div className="h-[1px] bg-gradient-to-r from-indigo-50 to-indigo-500 w-full" />
      <Badge variant="outline" className="bg-indigo-50 text-indigo-600 border-indigo-200 w-60">
        {event.name}
      </Badge>
      <div className="h-[1px] bg-gradient-to-r from-indigo-500 to-indigo-50 w-full" />
    </div>

    <div className="flex gap-4 overflow-x-auto pb-4">
      {event.rfps.map((rfp, i) => (
        <BookingCard key={i} rfp={rfp} />
      ))}
    </div>
  </>
} 