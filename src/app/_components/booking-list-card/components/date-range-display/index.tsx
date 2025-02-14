import { DateFormat } from "@/lib/utils"
import { CalendarDaysIcon } from "lucide-react"

export const DateRangeDisplay = ({ min, max }: { min: string, max: string }) => {

  const { date: minDate } = DateFormat(min)
  const minDateString = minDate.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit"
  })

  const { date: maxDate } = DateFormat(max)
  const maxDateString = maxDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  })

  return <div className="text-sm text-muted-foreground flex items-center gap-2">
    <CalendarDaysIcon className="size-4" />
    {minDateString} - {maxDateString}
  </div>
}