import { Card } from "@/components/card"
import { BookingCardProps } from "./types"
import { Button } from "@/components/button"
import { FileSearch } from "lucide-react"

export const BookingCard = ({ rfp }: BookingCardProps) => {
  return <Card className="flex flex-col gap-3 p-4 min-w-[400px]">
    <div className="flex justify-between ">
      <div>
        <h3 className="font-bold text-[#141416]">{rfp.rfpName}</h3>
        <div className="flex text-sm gap-1">
          <p className="text-muted-foreground">Agreement:</p>
          <p className="font-medium">{rfp.agreement_type}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <div className="bg-blue-50 text-center rounded-xl pb-1 w-fit">
          <div className="text-xs text-blue-500 bg-blue-500/20 rounded-t-xl px-4">JAN</div>
          <div className="text-xl font-bold text-blue-500">8</div>
        </div>
        <div className="text-xs text-muted-foreground">Cut-Off Date</div>
      </div>
    </div>
    <div className="text-sm text-muted-foreground">{rfp.cut_off_date}</div>

    <div className="flex gap-2">
      <Button className="flex-1">View Bookings ({rfp.bookings})</Button>
      <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
        <FileSearch className="h-4 w-4" />
      </Button>
    </div>
  </Card>
}