"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterStore } from "@/lib/zustand";

const ActiveFilterButton = () => {
  const activeState = useFilterStore((state) => state.active);
  const setActive = useFilterStore((state) => state.setActive);

  return (
    <Select
      onValueChange={(value) => {
        setActive(value);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter active event" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="1">Active</SelectItem>
          <SelectItem value="0">Nonactive</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ActiveFilterButton;
