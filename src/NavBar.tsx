import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
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
            <SheetContent className="bg-[#191724] ">
              <div className="flex flex-col space-y-10 mt-[20px]  ">
                <SheetClose asChild className="flex justify-center">
                  <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <Button className="bg-background text-accent w-[200px] hover:bg-accent hover:text-background active:bg-accent active:text-background ">
                      Experience
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild className="flex justify-center">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <Button className="bg-background text-accent w-[200px] hover:bg-accent hover:text-background   ">
                      Projects
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild className="flex justify-center">
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <Button className="bg-background text-accent w-[200px] hover:bg-accent hover:text-background  ">
                      Skills
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild className="flex justify-center">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <Button className="bg-background text-accent w-[200px] hover:bg-accent hover:text-background  ">
                      Contact me
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild className="flex justify-center">
                  <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <Button className="bg-background text-accent w-[200px] hover:bg-accent hover:text-background  ">
                      Resume
                    </Button>
                  </Link>
                </SheetClose>
              </div>
              <SheetClose className="bg-accent" />
            </SheetContent>
          </Sheet>
        </div>

        <ul className=" hidden lg:block  ">
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Button
              variant="link"
              className="text-txt text-[10px] md:text-[20px] hover:text-accent   "
            >
              Experience
            </Button>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Button
              variant="link"
              className="text-txt text-[10px] md:text-[20px] hover:text-accent "
            >
              Projects
            </Button>
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>
            <Button
              variant="link"
              className="text-txt text-[10px] md:text-[20px] hover:text-accent "
            >
              Skills
            </Button>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
            <Button
              variant="link"
              className="text-txt text-[10px] md:text-[20px] hover:text-accent  "
            >
              Contact Me
            </Button>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Button
              variant="link"
              className="text-txt text-[10px] md:text-[20px] hover:text-accent  "
            >
              Resume
            </Button>
          </Link>
        </ul>
      </div>
    </section>
  );
}

export default NavBar;
