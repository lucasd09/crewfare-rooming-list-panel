import { Search } from "lucide-react"
import { Input } from "@/components/input"
import { StatusFilter } from "./_components/status-filter"
import { BookingList } from "./_components/booking-list"

export default function Page() {
  return (
    <div className="px-8 py-12 flex flex-col gap-6 min-h-screen bg-background">
      <h1 className="text-2xl font-bold mb-6 text-[#141416]">Rooming List Management: Events</h1>
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground " />
          <Input placeholder="Search" className="pl-8" />
        </div>
        <StatusFilter />
      </div>

      {events.map((event, i) => (<BookingList key={i} event={event} />))}

    </div>
  )
}

