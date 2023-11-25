import Tile from "./Tile";

let skills = [
  {
    data: "Javascript",
    learning: "0",
  },
  {
    data: "Python",
    learning: "0",
  },
  {
    data: "Java",
    learning: "0",
  },
  {
    data: "Bash",
    learning: "1",
  },

  {
    data: "HTML",
    learning: "0",
  },
  {
    data: "CSS",
    learning: "0",
  },
  {
    data: "SQL (Postgres)",
    learning: "1",
  },
  {
    data: "Mongo DB",
    learning: "1",
  },
  {
    data: "React",
    learning: "1",
  },
  { data: "Tailwind", learning: "0" },
  {
    data: "Node JS",
    learning: "0",
  },
  { data: "C++", learning: "1" },
  {
    data: "Express",
    learning: "0",
  },
  {
    data: "Django",
    learning: "1",
  },
  {
    data: "Git",
    learning: "0",
  },
  {
    data: "Docker",
    learning: "0",
  },
  {
    data: "Ansible",
    learning: "1",
  },
  {
    data: "NGINX",
    learning: "0",
  },
  {
    data: "NPM",
    learning: "1",
  },
  {
    data: "Django-REST",
    learning: "0",
  },
  {
    data: "Postman",
    learning: "1",
  },
  { data: "Data Structures and Algorithms", learning: "0" },
  {
    data: "PowerBI",
    learning: "1",
  },
  {
    data: "jQuery",
    learning: "1",
  },
  {
    data: "NumPy",
    learning: "0",
  },
  {
    data: "Matplotlib",
    learning: "0",
  },
  {
    data: "Plotly",
    learning: "1",
  },
  {
    data: "Streamlit",
    learning: "0",
  },
  {
    data: "RegEx",
    learning: "1",
  },
  {
    data: "Rospy",
    learning: "1",
  },
  {
    data: "Tensorflow",
    learning: "1",
  },
  {
    data: "pandas",
    learning: "0",
  },
  {
    data: "AWS EC2",
    learning: "0",
  },
  {
    data: "Linux",
    learning: "0",
  },
  { data: "AWS S3", learning: "0" },
  {
    data: "OpenStack",
    learning: "1",
  },
  { data: "RHEL(CentOS)", learning: "1" },
];

function Skills() {
  return (
    <div className=" m-[10px] lg:m-[20px]  ">
      <div className="flex justify-center ">
        <h1 className="text-txt text-[25px] lg:text-[35px]">Skills</h1>
      </div>
      <div className="   flex  justify-center m-[10px] ">
        <div className="  flex flex-wrap lg:w-3/6 space-x-3 justify-center p-[10px] ">
          {skills.map(function (info) {
            return <Tile data={info.data} learning={info.learning} />;
          })}
        </div>
      </div>
      <div className="flex justify-center space-x-2 m-[10px] lg:m-[20px]">
        <div className="h-[18px] w-[18px] lg:h-[25px] lg:w-[25px] rounded-md bg-accent"></div>
        <h1 className="text-txt -translate-y-0.5 text-[12px] lg:text-[18px]">
          - Learning
        </h1>
      </div>
    </div>
  );
}

export default Skills;
