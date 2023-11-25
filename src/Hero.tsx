import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import gh from "./assets/gh.svg";
import linkedin from "./assets/linkedin.svg";
import TerminalText from "./TerminalText";

function Hero() {
  return (
    <section className="flex flex-col m-[10px]  lg:flex lg:flex-row  lg:m-[20px]">
      <div className="flex flex-col p-[10px]  items-center justify-center lg:w-2/4 ">
        {/* Hero section */}

        <h1 className="text-[25px] lg:text-[35px] text-txt">
          Hello, my name is <span className="text-accent ">Himagna Ganti</span>.
        </h1>
        <br></br>
        <h2 className="text-[15px] lg:text-[20px] text-txt text-justify ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          dolore veniam! Exercitationem dicta molestias nostrum alias aut,
          cupiditate aspernatur veniam dignissimos facere vel culpa optio, nisi
          repellat, neque illum voluptate!
        </h2>
        <div className="flex flex-row mt-[50px]  space-x-[20px]">
          <a
            target="_blank"
            href="https://github.com/Himagna-Ganti"
            rel="noreferrer"
          >
            <Avatar className="mt-[2px] lg:h-[50px] lg:w-[50px]">
              <AvatarImage src={gh} />
              <AvatarFallback>GH</AvatarFallback>
            </Avatar>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/himagna-ganti-500b0b235/"
            rel="noreferrer"
          >
            <Avatar className="h-[45px] w-[45px] lg:h-[55px] lg:w-[55px]">
              <AvatarImage src={linkedin} />
              <AvatarFallback>LN</AvatarFallback>
            </Avatar>
          </a>
        </div>
      </div>
      <div className="lg:w-2/4">
        <TerminalText />
      </div>
    </section>
  );
}

export default Hero;
