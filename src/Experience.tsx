const workEx = [
  {
    company: "University of Ottawa",
    location: "Ottawa, ON",
    position: "Research Assistant",
    duration: " June 2023 - Current",
    summary: [
      "Developed a cloud based portal exclusively to host UAV related datasets.",
      "Utilised cloud resources provided by Digital Research Alliance of Canada to my supervisor, Prof. Miodrag Bolic.",
      "Configured S3 buckets to store data as well as configured S3 APIs for the portal.",
      "Configured Globus platform for easier data sharing between different Compute Canada clusters among research peers under Prof. Bolic.",
    ],
  },
  {
    company: "Proxima Systems",
    location: "Hyderabad, India",
    position: "Backend Web development Intern",
    duration: " Feb 2022 - Jun 2022 ",
    summary: [
      "Part of the team developing back-end functionality for company's internal ticketing system interface using Node.js.",
      "Employed MongoDB for faster query response time.",
      "REST API testing - POSTMAN.",
    ],
  },
  {
    company: "Green Visakha Eco-Friendly Industries",
    location: "Visakhapatnam, India",
    position: "Intern",
    duration: " Jan 2021 - Feb 2021 ",
    summary: [
      "Developed SCL code for programming Siemens' PLCs.",
      "Maintained conveyor belt ladder logic for a brick factory.",
    ],
  },
];

function Experience() {
  return (
    <div
      className="  text-txt m-[10px]  lg:m-[20px] mb-[40px] lg:mb-[70px]"
      id="experience"
    >
      <div className="flex justify-center">
        <h1 className="text-txt text-[25px] lg:text-[35px]">Experience</h1>
      </div>
      <div className="mt-[20px]">
        {workEx.map(function (data) {
          return (
            <div className=" mb-[15px] flex flex-col p-[10px]">
              <div className=" flex flex-row justify-between">
                <h1 className="text-accent text-[12px] lg:text-[20px]">
                  {data.company}
                </h1>
                <h1 className="text-txt text-[12px] pt-[5px] lg:text-[18px]">
                  {data.location}
                </h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="text-txt text-[12px] lg:text-[18px]">
                  {data.position}
                </h1>
                <h1 className="text-txt text-[12px] lg:text-[18px]">
                  {data.duration}
                </h1>
              </div>

              <div className=" m-[20px] lg:m-[30px] ">
                <ul className="text-[12px] space-y-2 list-image-[url(/src/assets/arroww.svg)] list-outside lg:text-[18px] lg:list-image-[url(/src/assets/arrow.svg)] ">
                  {data.summary.map(function (data) {
                    return <li className="  "> {data}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Experience;
