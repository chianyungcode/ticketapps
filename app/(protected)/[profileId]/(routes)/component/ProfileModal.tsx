import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "@prisma/client";
import axios from "axios";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface ProfileModalProps {
  initialData: User | null;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ initialData }) => {
  const [profile, setProfile] = useState({
    name: initialData?.name || "",
    address: initialData?.address || "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.patch(
        `/api/profile/${initialData?.userId}`,
        {
          name: profile.name,
          address: profile.address,
        },
      );

      router.refresh();
      toast.success("Berhasil update profil");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="absolute right-4 top-4 rounded-xl">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogClose
          className="absolute right-4 top-4 rounded-xl"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
        </DialogClose>
        <DialogHeader>
          <DialogTitle>Edit a Profile</DialogTitle>
          <DialogDescription>Change your profile here</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 gap-y-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={profile.name}
              className="col-span-3"
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={profile.address}
              className="col-span-3"
              onChange={(e) =>
                setProfile({ ...profile, address: e.target.value })
              }
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading} className="">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
