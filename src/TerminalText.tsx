import { Avatar } from "@radix-ui/react-avatar";
import Typed from "react-typed";

function TerminalText() {
  return (
    <div className="flex justify-center m-[10px] lg:m-[20px]  lg:items-center ">
      <div className="shadow-lg text-[#e0def4] bg-[#191724]  rounded-md  w-[350px] h-[300px] lg:w-[550px] lg:h-[350px]  ">
        <div className="w-100% h-[15px]  flex space-x-2 pt-[5px] pl-[8px]">
          <Avatar className="h-[8px] w-[8px] lg:h-[10px] lg:w-[10px] rounded-full bg-[#ff5f56]" />
          <Avatar className="h-[8px] w-[8px] lg:h-[10px] lg:w-[10px] rounded-full bg-[#ffbd2e]" />
          <Avatar className="h-[8px] w-[8px] lg:h-[10px] lg:w-[10px] rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-col  text-[10px] lg:text-[15px]  m-[10px] font-menlo">
          <Typed
            strings={["portfolio@devserver:~$"]}
            showCursor={false}
            typeSpeed={18}
            className="text-[#1dc121] "
          />
          &nbsp;
          <Typed
            strings={["whoami"]}
            showCursor={false}
            startDelay={1700}
            typeSpeed={18}
            className=""
          />
          <br />
          <Typed
            strings={["himagna"]}
            showCursor={false}
            startDelay={2300}
            typeSpeed={18}
            className=" "
          />
          <br />
          <Typed
            strings={["portfolio@devserver:~$"]}
            showCursor={false}
            startDelay={4000}
            typeSpeed={18}
            className="text-[#1dc121] "
          />
          &nbsp;
        </div>
      </div>
    </div>
  );
}
export default TerminalText;
