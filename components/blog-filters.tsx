"use client";

import {
  MagnifyingGlassIcon,
  XIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";
import type { SortOption } from "@/hooks/use-blogs";

interface BlogFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  resultsCount: number;
}

const sortOptions = [
  { value: "date-desc", label: "Newest First" },
  { value: "date-asc", label: "Oldest First" },
  { value: "title-asc", label: "Title A-Z" },
  { value: "title-desc", label: "Title Z-A" },
];

export default function BlogFilters({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  resultsCount,
}: BlogFiltersProps) {
  const clearSearch = () => {
    onSearchChange("");
  };

  const currentSortLabel =
    sortOptions.find((option) => option.value === sortBy)?.label ||
    "Newest First";

  return (
    <>
      <div className="blog-header border-b flex flex-col gap-4 justify-between items-center w-full pb-4 pt-20 px-2 z-10">
        <div className="flex items-center gap-4 flex-1">
          <h1 className="md:text-4xl text-2xl font-bold tracking-tight">
            Latest Publications
          </h1>
        </div>

        <div className="flex md:flex-row flex-col items-end gap-3">
          {/* Search Input */}
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
            <input
              type="text"
              placeholder="Search for posts ..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-10 py-2 border border-gray-300 rounded-lg bg-white w-64 text-sm"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:bg-gray-100 rounded p-0.5"
              >
                <XIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <CaretDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </>
  );
}
