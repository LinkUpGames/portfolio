interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {/* Company Name */}
      <div className="w-full flex justify-center flex-col items-center md:flex-row md:justify-between md:items-center border-b-2 border-b-dark pb-2 md:pb-0 mb-4">
        <h1 className="text-3xl text-left text-red">{experience.company}</h1>

        <h2 className="text-base text-right text-dark">{experience.time}</h2>
      </div>

      {/* Description */}
      <div className="w-full flex flex-col">
        <h6 className="text-xl md:text-base text-green">{experience.job}</h6>
        <h4 className="text-base md:text-sm text-black whitespace-pre-line">
          {`${experience.description}`}
        </h4>
      </div>

      {/* Image */}
      {experience.img && (
        <div className="w-full">
          <img
            className="w-auto object-contain h-56 mx-auto border-red border-2 rounded-lg"
            src={experience.img}
            alt="Experience Image"
          />
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
