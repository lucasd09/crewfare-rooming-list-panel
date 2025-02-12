import { Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"

export default function Page() {
  return (
    <div className="p-6 min-h-screen bg-background">
      <h1 className="text-2xl font-bold mb-6 text-[#141416]">Rooming List Management: Events</h1>
      <div className="flex gap-4 mb-8">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-8" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              Filters
              <SlidersHorizontal className="text-emerald-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="p-2">
              <h4 className="mb-2 text-sm font-medium">RFP STATUS</h4>
              <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Closed</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Canceled</DropdownMenuCheckboxItem>
              <Button className="w-full mt-2">Save</Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

