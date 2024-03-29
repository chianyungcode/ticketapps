import { useState } from "react";

import {
  ArrowUpNarrowWide,
  Check,
  CheckIcon,
  ChevronsUpDown,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRenderInfo } from "@uidotdev/usehooks";

interface FilterEventProps {
  location: { value: string; label: string }[];
}

const FilterEvent: React.FC<FilterEventProps> = ({ location }) => {
  // const info = useRenderInfo("FilterEvent");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  const uniqueLocation = location.reduce((acc: typeof location, current) => {
    const x = acc.find((item) => item.value === current.value);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? uniqueLocation.find((framework) => framework.value === value)
                  ?.label
              : "Select city..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search city..." />
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup>
              {uniqueLocation.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    setCount(count + 1);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default FilterEvent;
