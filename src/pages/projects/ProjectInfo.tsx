import { ReactNode, useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProjectCarousel from "./ProjectCarousel";
import { Link } from "react-router-dom";
import { ProjectContext } from "./ProjectContext";

interface Props {
  children: ReactNode;
  info: {
    title: string;
    summary: string;
    link: string;
    images: string[];
    widget: JSX.Element;
  };
}

const ProjectInfo = ({
  children,
  info = {
    title: "",
    summary: "",
    link: "",
    images: [],
    widget: <></>,
  },
}: Props) => {
  const { open, handleOpen } = useContext(ProjectContext);
  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <>{children}</>

      <DialogContent className="z-[9999] w-11/12 rounded-lg border-4 border-black max-h-[80%] overflow-y-auto bg-dark-status text-white">
        <DialogHeader className="border-b-2 border-b-grey text-blue">
          <DialogTitle className="text-sm sm:text-lg text-left sm:text-center">
            {info.title}
          </DialogTitle>
        </DialogHeader>

        <DialogDescription className="flex flex-col w-full h-full">
          <ProjectCarousel images={info.images} />

          {/* Text */}
          <div className="w-full h-full flex flex-col gap-4">
            <p className="text-base w-full whitespace-pre-line">{`${info.summary}`}</p>

            {info.link && (
              <Link
                to={info.link}
                target="_blank"
                className="text-base underline text-center mx-auto text-red rounded-lg border-2 border-red w-fit p-2 hover:text-green transition-colors duration-300"
              >
                Check the project out!
              </Link>
            )}

            <div className="max-w-full">{info.widget}</div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectInfo;
