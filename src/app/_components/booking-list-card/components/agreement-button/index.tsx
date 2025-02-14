import { Button } from "@/components/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/tooltip"
import { FileSearch } from "lucide-react"

export const AgreementButton = () => {
  return <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
          <FileSearch className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Show Agreement as PDF</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
}