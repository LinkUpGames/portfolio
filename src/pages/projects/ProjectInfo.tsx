import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  children: ReactNode;
  info: {
    title: string;
    summary: string;
    link: string;
    images: string[];
  };
}

const ProjectInfo = ({
  children,
  info = {
    title: "",
    summary: "",
    link: "",
    images: [],
  },
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>

      <DialogContent className="w-11/12 rounded-lg border-2">
        <DialogHeader>
          <DialogTitle>{info.title}</DialogTitle>
        </DialogHeader>

        <DialogDescription className="flex flex-col w-full">
          <p className="text-base text-black w-full">{info.summary}</p>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectInfo;
