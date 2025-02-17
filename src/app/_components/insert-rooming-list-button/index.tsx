import { removeAllRoomingLists, removeAllBookings, insertRoomingLists, insertBookings, insertRoomingListBookings } from "@/app/actions"
import { Button } from "@/components/button"
import { RoomingListData } from "@/lib/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const InsertRoomingListButton = () => {
  const queryClient = useQueryClient()

  const handleInsert = async () => {
    const data = queryClient.getQueryData<RoomingListData>(["rooming-lists"])

    if (!data) {
      return
    }

    const roomingListIds: number[] = []

    for (const roomingList of data.roomingLists) {
      roomingListIds.push(roomingList.roomingListId);
    }


    await removeAllRoomingLists(roomingListIds)
    await removeAllBookings()

    await insertRoomingLists()
    await insertBookings()
    await insertRoomingListBookings()
  }

  const { mutate, isPending } = useMutation({ mutationFn: handleInsert })

  const handleMutate = () => {
    mutate()

    queryClient.resetQueries()
  }


  return <Button onClick={handleMutate} isLoading={isPending}>Insert Bookings and Rooming Lists</Button>
}