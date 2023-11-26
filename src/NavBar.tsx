import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import hamburger from "./assets/hamburger.svg";
import pfp from "./assets/100x100.jpg";

function NavBar() {
  return (
    <section className="flex m-[10px] md:m-[20px]  items-center justify-between   ">
      <div className=" flex  space-x-2  ">
        <Avatar className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]  ">
          <AvatarImage src={pfp} />
          <AvatarFallback>HG</AvatarFallback>
        </Avatar>
        <div className="flex items-center pl-[10px] text-[20px] font-nunito text-txt     ">
          Ganti, Himagna
        </div>
      </div>
      <div className=" flex  font-nunito ">
        <div className="flex lg:hidden  items-center">
          <Sheet>
            <SheetTrigger>
              <Avatar className="h-[20px] w-[20px] rounded-none text-white">
                <AvatarImage src={hamburger} />
              </Avatar>
            </SheetTrigger>
            <SheetContent className="bg-[#191724]">
              <div className="flex flex-col space-y-10 mt-[20px] ">
                <Button className="bg-background text-accent   ">
                  Experience
                </Button>
                <Button className="bg-background text-accent">Projects</Button>
                <Button className="bg-background text-accent">Skills</Button>
                <Button className="bg-background text-accent">Contact</Button>
                <Button className="bg-background text-accent">Resume</Button>
              </div>
              <SheetClose className="bg-accent" />
            </SheetContent>
          </Sheet>
        </div>

        <ul className=" hidden lg:block  ">
          <Button
            variant="link"
            className="text-txt text-[10px] md:text-[20px] hover:text-accent   "
          >
            Experience
          </Button>
          <Button
            variant="link"
            className="text-txt text-[10px] md:text-[20px] hover:text-accent "
          >
            Projects
          </Button>
          <Button
            variant="link"
            className="text-txt text-[10px] md:text-[20px] hover:text-accent "
          >
            Skills
          </Button>
          <Button
            variant="link"
            className="text-txt text-[10px] md:text-[20px] hover:text-accent  "
          >
            Contact Me
          </Button>
          <Button
            variant="link"
            className="text-txt text-[10px] md:text-[20px] hover:text-accent  "
          >
            Resume
          </Button>
        </ul>
      </div>
    </section>
  );
}

export default NavBar;
