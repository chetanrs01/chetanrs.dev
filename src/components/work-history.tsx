import React from "react";
import WorkTile from "@/components/work-tile";
import experiences from "./experiences.json";

const WorkHistory = () => {
  return (
    <div>
      <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Work History
      </h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiences.workExperiences.map((experience, index) => (
          <WorkTile
            key={index}
            company={experience.company}
            title={experience.title}
            description={experience.description}
            startDate={experience.startDate}
            endDate={experience.endDate}
          />
        ))}
      </ol>
    </div>
  );
};

export default WorkHistory;
