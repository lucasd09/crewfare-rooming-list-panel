'use client'
import { Search } from "lucide-react"
import { Input } from "@/components/input"
import { StatusFilter } from "./_components/status-filter"
import { RoomingListEvent } from "./_components/booking-list"
import { useQuery } from "@tanstack/react-query"
import { EventsSkeleton } from "./_components/events-skeleton"
import { getRoomingLists } from "./actions"
import { SearchFilters } from "./hooks/use-search/types"
import { useState } from "react"
import { useSearch } from "./hooks/use-search"

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState<SearchFilters>({
    active: true,
    closed: true,
    cancelled: false,
  })

  const { data, isLoading } = useQuery({ queryKey: ['rooming-lists'], queryFn: getRoomingLists })

  const filteredData = useSearch(data, searchTerm, filters)

  return (
    <div className="px-8 py-12 flex flex-col gap-6 min-h-screen bg-background">
      <h1 className="text-2xl font-bold mb-6 text-[#141416]">Rooming List Management: Events</h1>
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>
        <StatusFilter filters={filters} setFilters={setFilters} />
      </div>

      {isLoading ? <EventsSkeleton /> : filteredData?.map((event, i) => (<RoomingListEvent key={i} event={event} />))}

    </div>
  )
}

