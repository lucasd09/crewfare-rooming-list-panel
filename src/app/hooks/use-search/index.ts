import { useMemo } from "react";
import { SearchFilters } from "./types";
import { RoomingListData } from "@/models/rooming-list-data";

export const useSearch = (
  events: RoomingListData[] | undefined,
  searchTerm: string,
  filters: SearchFilters,
): RoomingListData[] => {
  return useMemo(() => {
    if (!events) {
      return [];
    }

    const loweredSearchTerm = searchTerm.toLowerCase();

    return events
      .map((event) => ({
        ...event,
        roomingLists: event.roomingLists.filter((list) => {
          const matchesSearch =
            list.eventName.toLowerCase().includes(loweredSearchTerm) ||
            list.rfpName.toLowerCase().includes(loweredSearchTerm) ||
            list.agreementType.toLowerCase().includes(loweredSearchTerm);

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
