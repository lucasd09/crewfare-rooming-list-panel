import { SearchFilters } from "@/app/hooks/use-search/types";
import { Dispatch, SetStateAction } from "react";

export type StatusFilterProps = {
  filters: SearchFilters;
  setFilters: Dispatch<SetStateAction<SearchFilters>>;
};
