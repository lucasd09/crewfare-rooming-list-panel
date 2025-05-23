import { removeAllRoomingLists, removeAllBookings, insertRoomingLists, insertBookings, insertRoomingListBookings } from "@/app/actions"
import { Button } from "@/components/button"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const InsertRoomingListButton = () => {
  const queryClient = useQueryClient()

  const handleInsert = async () => {
    await removeAllRoomingLists()
    await removeAllBookings()

    await insertRoomingLists()
    await insertBookings()
    await insertRoomingListBookings()
  }

  const { mutate, isPending } = useMutation({ mutationFn: handleInsert })

  const handleMutate = () => {
    mutate();
    queryClient.resetQueries()
  }

  return <Button onClick={handleMutate} isLoading={isPending} className="h-12 w-full">Insert Bookings and Rooming Lists</Button>
}