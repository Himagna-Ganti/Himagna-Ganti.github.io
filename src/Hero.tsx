import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import gh from "./assets/gh.svg";
import linkedin from "./assets/linkedin.svg";
import TerminalText from "./TerminalText";

function Hero() {
  return (
    <section className="flex flex-col m-[10px] mb-[40px] lg:mb-[70px]  lg:flex lg:flex-row  lg:m-[20px] ">
      <div className="flex flex-col p-[10px]  items-center justify-center lg:w-2/4 ">
        {/* Hero section */}

        <h1 className="text-[22px] lg:text-[35px] text-txt">
          Hello, my name is <span className="text-accent ">Himagna Ganti</span>.
        </h1>
        <br />
        <blockquote className="mt-6 border-l-2 pl-6 italic text-txt text-[10px] lg:text-[15px]">
          Turning ideas into programs, one line of code at a time.
        </blockquote>
        <br />
        <h2 className="text-[15px] lg:text-[20px] text-txt text-justify ">
          I am a skilled full-stack developer with expertise in Javascript and
          Python, passionate about building things. I am a creative, motivated
          and an inquisitive individual who tackles problems with a technology
          agnostic mindset.
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
            <Avatar className="h-[47px] w-[47px] -translate-y-[2px] lg:h-[60px] lg:w-[60px] lg:-translate-y-[2px]">
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
