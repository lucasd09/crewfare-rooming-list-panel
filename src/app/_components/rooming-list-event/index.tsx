import { Badge } from "@/components/badge"
import { RoomingListCard } from "../rooming-list-card"
import { RoomingListEventProps } from "./types"

export const RoomingListEvent = ({ event }: RoomingListEventProps) => {
  return <>
    <div className="flex itens center gap-2 items-center">
      <div className="h-px bg-gradient-to-r from-indigo-50 to-indigo-500 w-full" />
      <Badge variant="outline" className="bg-indigo-50 text-indigo-600 border-indigo-200 flex justify-center w-60">
        {event.eventName}
      </Badge>
      <div className="h-[1px] bg-gradient-to-r from-indigo-500 to-indigo-50 w-full" />
    </div>

    <div className="flex flex-col sm:flex-row gap-4 overflow-x-auto pb-4">
      {event.roomingLists.map((roomingList) => (
        <RoomingListCard key={roomingList.roomingListId} roomingList={roomingList} />
      ))}
    </div>
  </>
} 