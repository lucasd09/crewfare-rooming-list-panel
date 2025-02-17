import { RoomingListData } from "@/lib/types";
import { useMemo } from "react";
import { SearchFilters } from "./types";

export const useSearch = (
  events: RoomingListData[] | undefined,
  searchTerm: string,
  filters: SearchFilters,
): RoomingListData[] => {
  return useMemo(() => {
    if (!events) {
      return [];
    }

    return events
      .map((event) => ({
        ...event,
        roomingLists: event.roomingLists.filter((list) => {
          const matchesSearch =
            list.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            list.rfpName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            list.agreementType.toLowerCase().includes(searchTerm.toLowerCase());

          const matchesFilter =
            (filters.active && list.status === "received") ||
            (filters.closed && list.status === "completed") ||
            (filters.cancelled && list.status === "archived");

          return matchesSearch && matchesFilter;
        }),
      }))
      .filter((event) => event.roomingLists.length > 0);
  }, [events, searchTerm, filters]);
};
