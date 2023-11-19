import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import hamburger from "./assets/hamburger.svg";

function NavBar() {
  return (
    <section className="flex m-[10px] md:m-[20px]  items-center justify-between  ">
      <div className=" flex  space-x-2  ">
        <Avatar className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>HG</AvatarFallback>
        </Avatar>
        <div className="flex items-center pl-[10px] text-[20px] font-nunito text-txt     ">
          Ganti, Himagna
        </div>
      </div>
      <div className=" flex  font-nunito ">
        <div className="flex lg:hidden items-center">
          <Sheet>
            <SheetTrigger>
              <Avatar className="h-[20px] w-[20px] rounded-none">
                <AvatarImage src={hamburger} />
                <AvatarFallback>Menu</AvatarFallback>
              </Avatar>
            </SheetTrigger>
            <SheetContent className="bg-secondary ">
              <div className="flex flex-col space-y-6 mt-[20px]">
                <Button>Experience</Button>
                <Button>Projects</Button>
                <Button>Skills</Button>
                <Button>Contact Me</Button>
                <Button>Resume</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <ul className=" hidden lg:block  ">
          <Button
            variant="link"
            className="text-txt text-[10px] md:text-[20px] hover:text-accent  "
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
            variant="destructive"
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
