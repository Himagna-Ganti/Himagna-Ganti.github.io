import { Avatar } from "@radix-ui/react-avatar";
import Typed from "react-typed";

function TerminalText() {
  return (
    <div className="flex justify-center m-[10px] lg:m-[20px]  lg:items-center ">
      <div className="shadow-lg text-[#e0def4] bg-[#191724]  rounded-md  w-[300px] h-[200px] lg:w-[550px] lg:h-[300px]  ">
        <div className="w-100% h-[15px]  flex space-x-2 pt-[5px] pl-[8px]">
          <Avatar className="h-[8px] w-[8px] lg:h-[10px] lg:w-[10px] rounded-full bg-[#ff5f56]" />
          <Avatar className="h-[8px] w-[8px] lg:h-[10px] lg:w-[10px] rounded-full bg-[#ffbd2e]" />
          <Avatar className="h-[8px] w-[8px] lg:h-[10px] lg:w-[10px] rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-col  text-[12px] lg:text-[18px]  m-[10px] font-menlo">
          <Typed
            strings={["hganti@prod:~$"]}
            showCursor={false}
            typeSpeed={18}
            className="text-[#1dc121] "
          />
          &nbsp;
          <Typed
            strings={["whoami"]}
            showCursor={false}
            startDelay={800}
            typeSpeed={18}
            className=""
          />
          <br />
          <Typed
            strings={["himagna"]}
            showCursor={false}
            startDelay={1500}
            typeSpeed={18}
            className=" "
          />
          <br />
          <Typed
            strings={["hganti@prod:~$"]}
            showCursor={false}
            startDelay={2200}
            typeSpeed={18}
            className="text-[#1dc121] "
          />
          &nbsp;
          <Typed
            strings={["cat ~/Interests.txt"]}
            showCursor={false}
            startDelay={2900}
            typeSpeed={18}
            className=" "
          />
          <br />
          <Typed
            strings={["-> Networking"]}
            showCursor={false}
            startDelay={3600}
            typeSpeed={18}
            className=""
          />
          <br />
          <Typed
            strings={["-> Automation"]}
            showCursor={false}
            startDelay={4400}
            typeSpeed={18}
            className=""
          />
          <br />
          <Typed
            strings={["-> CI/CD"]}
            showCursor={false}
            startDelay={6000}
            typeSpeed={18}
            className=""
          />
          <br />
          <Typed
            strings={["-> DevOps"]}
            showCursor={false}
            startDelay={7500}
            typeSpeed={18}
            className=""
          />
          <br />
          <Typed
            strings={["-> Serverless architecture"]}
            showCursor={false}
            startDelay={8600}
            typeSpeed={18}
            className=""
          />
          <br />
          <Typed
            strings={["-> Serverless API design"]}
            showCursor={false}
            startDelay={10200}
            typeSpeed={18}
            className=""
          />
        </div>
      </div>
    </div>
  );
}
export default TerminalText;
