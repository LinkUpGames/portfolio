interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return <div>{experience.description}</div>;
};

export default ExperienceCard;
