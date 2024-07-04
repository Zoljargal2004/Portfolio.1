import { Topic } from "./About";

const experience_list = [
  {
    work: "UpWork",
    hire_date: "Nov 2021",
    fire_date: "Present",
    job_title: "Sr. Frontend Developer",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    work: "UpWork",
    hire_date: "Dec 2015",
    fire_date: "May 2017",
    job_title: "Full Stack Developer",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    work: "UpWork",
    hire_date: "Jul 2017",
    fire_date: "Oct 2021",
    job_title: "Team Lead",
    description: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  }
];

export function Experience() {
  return (
    <div className="bg-[--sec-bg-color] px-4 py-16">
      <div className="flex flex-col items-center gap-4">
        <Topic title="Experience" />
        <span className="text-[18px] mb-2">
          Here is a quick summary of my most recent experiences:
        </span>
        <WorkExperience />
      </div>
    </div>
  );
}

function WorkExperience() {
  return (
    <div className="w-[100%] max-w-[896px] flex flex-col gap-6">
      {experience_list.map((experience) => {
        return (
          <div className="bg-[--line-bg] rounded-xl p-8">
            <div className="flex flex-col gap-4">
              <div className="h-7">
                <img
                  src={"/Images/Job_Logo/" + experience.work + ".svg"}
                  className="object-contain"
                />
              </div>
              <span>
                {experience.hire_date} - {experience.fire_date}
              </span>
              <div className="flex flex-col gap-4 ">
                <h2 className="font-semibold text-lg">
                    {experience.job_title}
                </h2>
                <ul className="list-disc">
                    {experience.description.map((task) => {
                        return <li className="mb-1">{task}</li>
                    })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
