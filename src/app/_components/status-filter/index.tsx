import { Button } from "@/components/button"
import { Checkbox } from "@/components/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/dropdown-menu"
import { SlidersHorizontal } from "lucide-react"

export const StatusFilter = () => {
  return <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="gap-2">
        Filters
        <SlidersHorizontal className="text-emerald-500" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48 ml-24" sideOffset={8}>
      <div className="p-2">
        <DropdownMenuLabel className="mb-2 text-sm text-start text-muted-foreground font-medium">RFP STATUS</DropdownMenuLabel>
        <div className="flex gap-2 items-center select-none">
          <Checkbox id="active" />
          <label htmlFor="active">Active</label>
        </div>
        <div className="flex gap-2 items-center select-none">
          <Checkbox id="closed" />
          <label htmlFor="closed">Closed</label>
        </div>
        <div className="flex gap-2 items-center select-none">
          <Checkbox id="canceled" />
          <label htmlFor="canceled">Canceled</label>
        </div>
        <Button className="w-full mt-4">Save</Button>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
}