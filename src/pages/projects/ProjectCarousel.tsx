import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  images: string[];
}

const ProjectCarousel = ({ images }: Props) => {
  return (
    <Carousel
      className="w-full my-2"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img
              className="h-56 md:h-72 w-full object-contain"
              alt="Image"
              src={image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-2 -left-4 md:left-0 sm:-left-0 text-dark" />
      <CarouselNext className="border-2 -right-4 md:right-0 sm:-right-0 text-dark" />
    </Carousel>
  );
};

export default ProjectCarousel;
