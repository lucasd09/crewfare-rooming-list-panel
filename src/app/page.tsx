'use client'
import { StatusFilter } from "./_components/status-filter"
import { RoomingListEvent } from "./_components/rooming-list-event"
import { useQuery } from "@tanstack/react-query"
import { EventsSkeleton } from "./_components/events-skeleton"
import { getRoomingListData } from "./actions"
import { useState } from "react"
import { RoomingListEmpty } from "./_components/rooming-list-empty"
import { InsertRoomingListButton } from "./_components/insert-rooming-list-button"
import { useDebounce } from "@/lib/hooks/use-debounce"
import { SearchFilters } from "./_components/status-filter/types"
import { SearchInput } from "./_components/search-input"

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState<SearchFilters>({
    active: true,
    closed: true,
    cancelled: false,
  })

  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const { data, isLoading } = useQuery({
    queryKey: ['rooming-lists', debouncedSearchTerm, filters],
    queryFn: () => getRoomingListData({ searchTerm: debouncedSearchTerm, filters })
  })

  return (
    <div className="px-8 py-12 flex flex-col gap-6 min-h-screen bg-background">
      <h1 className="text-2xl font-bold mb-6 text-[#141416]">Rooming List Management: Events</h1>
      <div className="flex flex-col sm:flex-row gap-2 sticky top-0 z-10 bg-background sm:static py-4">
        <div className="flex gap-2 justify-between">
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <StatusFilter filters={filters} setFilters={setFilters} />
        </div>
        <div className="">
          <InsertRoomingListButton />
        </div>
      </div>

      {isLoading
        ? <EventsSkeleton />
        : data?.length
          ? data.map((event, i) => (<RoomingListEvent key={i} event={event} />))
          : <RoomingListEmpty />
      }
    </div>
  )
}

