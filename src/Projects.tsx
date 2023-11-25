import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import rct from "./assets/react.svg";
import node from "./assets/node.svg";
import js from "./assets/js.svg";
import postgresql from "./assets/postgresql.svg";
import openstack from "./assets/openstack.svg";
import tailwind from "./assets/tailwind.svg";
import html5 from "./assets/html5.svg";
import p1 from "./assets/p1.png";
import python from "./assets/python.svg";
import pandas from "./assets/python.svg";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const projects = [
  {
    title: "UAV4Everyone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, saepe iure tempora nemo enim minima amet odio impedit magnam mollitia fugiat est eligendi facere tempore nisi, dolore deleniti! Cumque, aut doloribus! Debitis, suscipit! Minus reprehenderit fugit nihil quis a! Laudantium amet neque vero alias architecto quisquam corporis, culpa magni dicta",
    image: p1,
    tech_stack: [rct, node, js, postgresql, openstack, tailwind, html5],
  },
  {
    title: "F1 through the years",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, saepe iure tempora nemo enim minima amet odio impedit magnam mollitia fugiat est eligendi facere tempore nisi, dolore deleniti! Cumque, aut doloribus! Debitis, suscipit! Minus reprehenderit fugit nihil quis a! Laudantium amet neque vero alias architecto quisquam corporis, culpa magni dicta",
    image: p1,

    tech_stack: [python, pandas, tailwind, html5],
  },
  {
    title: "Netflix Stock price prediction",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, saepe iure tempora nemo enim minima amet odio impedit magnam mollitia fugiat est eligendi facere tempore nisi, dolore deleniti! Cumque, aut doloribus! Debitis, suscipit! Minus reprehenderit fugit nihil quis a! Laudantium amet neque vero alias architecto quisquam corporis, culpa magni dicta",
    image: p1,

    tech_stack: [rct, node, js, postgresql, openstack, tailwind, html5],
  },
];

function Projects() {
  return (
    <div className="m-[10px] lg:m-[20px]  text-txt flex-col ">
      <div className="flex justify-center">
        <h1 className="text-txt text-[25px] lg:text-[35px]">Projects</h1>
      </div>
      <div className=" m-[15px] lg:m-[20px] space-y-4">
        {projects.map(function (data) {
          return (
            <Card className=" p-[10px] border-0 shadow-xl lg:p-[20px] bg-[rgb(30,30,30)]">
              <div className="space-y-2 flex-col">
                <CardTitle className="text-accent text-[18px] lg:text-[25px]">
                  {data.title}
                </CardTitle>
                <div className="flex ">
                  <CardDescription className="text-[15px] text-justify lg:w-3/5 lg:text-[18px] ">
                    {data.description}
                  </CardDescription>
                  <div className="w-2/5  hidden lg:block ">
                    <AspectRatio
                      ratio={16 / 6}
                      className="lg:flex lg:flex-row lg:justify-end"
                    >
                      <img src={p1} className=""></img>
                    </AspectRatio>
                  </div>
                </div>

                <div className="flex space-x-4 lg:space-x-8">
                  {data.tech_stack.map(function (logo) {
                    return (
                      <Avatar className="h-[25px] w-[25px] lg:h-[35px] lg:w-[35px] ">
                        <AvatarImage src={logo}></AvatarImage>
                      </Avatar>
                    );
                  })}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
