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
import { Button } from "@/components/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState<SearchFilters>({
    active: true,
    closed: true,
    cancelled: false,
  })
  const [page, setPage] = useState(1)
  const [limit] = useState(10)

  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const { data, isLoading } = useQuery({
    queryKey: ['rooming-lists', debouncedSearchTerm, filters, page, limit],
    queryFn: () => getRoomingListData({
      searchTerm: debouncedSearchTerm,
      filters,
      page,
      limit
    })
  })

  const handlePreviousPage = () => {
    if (data?.hasPrevious) {
      setPage(prev => prev - 1)
    }
  }

  const handleNextPage = () => {
    if (data?.hasNext) {
      setPage(prev => prev + 1)
    }
  }

  return (
    <div className="px-8 py-12 flex flex-col gap-6 h-full min-h-screen bg-background">
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
        : data?.items?.length
          ? (
            <>
              {data.items.map((event, i) => (<RoomingListEvent key={i} event={event} />))}
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                  Showing {data.items.length} of {data.total} items
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePreviousPage}
                    disabled={!data.hasPrevious}
                  >
                    <ChevronLeft className="size-4" />
                  </Button>
                  <span className="text-sm">
                    Page {data.page} of {data.totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNextPage}
                    disabled={!data.hasNext}
                  >
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
              </div>
            </>
          )
          : <RoomingListEmpty />
      }
    </div >
  )
}

