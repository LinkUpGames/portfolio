import pdf from "@/assets/resume.pdf";

const ExperienceIntro = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h2 className="text-lg sm:text-xl md:text-2xl text-blue-gray underline text-center mb-2">
        Check Out My Experience!
      </h2>

      {/* Content */}
      <p className="text-base text-black text-justify">
        Explore my professional journey through the organized folders below!
        Each folder is arranged chronologically to showcase my experience. Dive
        into the files within each folder for detailed insights. I've also
        included personal reflections on my journey, so be sure to check those
        out too!
      </p>

      {/* Resume */}
      <div className="w-full mt-4 h-full">
        <h3 className="text-xl text-black text-left underline">Resume</h3>

        {/* Pdf */}
        <iframe src={pdf} width="100%" height="650px" />
      </div>
    </div>
  );
};

export default ExperienceIntro;
