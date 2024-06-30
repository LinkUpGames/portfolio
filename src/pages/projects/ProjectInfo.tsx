import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectCarousel from "./ProjectCarousel";
import { Link } from "react-router-dom";

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

      <DialogContent className="w-11/12 rounded-lg border-2 border-black max-h-[80%] overflow-y-auto bg-dark text-white">
        <DialogHeader className="border-b-2 border-b-light">
          <DialogTitle>{info.title}</DialogTitle>
        </DialogHeader>

        <DialogDescription className="flex flex-col w-full h-full">
          <ProjectCarousel images={info.images} />

          {/* Text */}
          <div className="w-full h-full flex flex-col">
            <p className="text-base w-full">{info.summary}</p>

            <Link
              to={info.link}
              target="_blank"
              className="text-base underline text-center text-red"
            >
              Check the project out!
            </Link>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectInfo;
