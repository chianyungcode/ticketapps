import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { EventColumn } from "./columns";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import FormDialog from "@/components/own/FormDialog";

interface CellActionProps {
  data: EventColumn;
}

const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (eventId: string) => {
      return axios.delete(`api/event/${eventId}`);
    },
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          className="cursor-pointer text-sm "
          onClick={() => navigator.clipboard.writeText(data.id)}
        >
          Copy event ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push(`/event/${data.id}`)}
        >
          Edit data
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer text-red-700"
          onClick={() => mutation.mutate(data.id)}
        >
          Delete event
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CellAction;
