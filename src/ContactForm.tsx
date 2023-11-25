import { Input } from "./components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ContactForm() {
  return (
    <div className=" m-[10px] lg:m-[20px]">
      <div className="flex justify-center ">
        <h1 className="text-txt text-[25px] lg:text-[35px]">Contact Me</h1>
      </div>
      <div className="m-[10px] lg:m-[20px] ">
        <div className="flex justify-center ">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className=" w-2/3 lg:w-1/2 flex-col space-y-6 "
          >
            <input
              type="hidden"
              name="access_key"
              value="48852d54-44e9-4e72-b5fe-5966570f4436"
            ></input>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="border-accent placeholder:-translate-x-1.5 text-txt   placeholder:text-txt placeholder:text-[12px] text-[12px] lg:text-[15px] lg:placeholder:text-[15px] lg:h-[45px] h-[32px]  focus-visible:ring-0 focus:border-2"
            />
            <input type="hidden" name="from_name" value="My_Website"></input>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="border-accent placeholder:-translate-x-1.5 text-txt text-[12px] placeholder:text-txt lg:text-[15px] lg:placeholder:text-[15px] lg:h-[45px]  placeholder:text-[12px] h-8 focus-visible:ring-0 focus:border-2"
            />
            <Textarea
              className="border-accent text-txt placeholder:text-txt text-[12px] lg:text-[15px] lg:placeholder:text-[15px] lg:min-h-[120px] placeholder:-translate-x-1.5 focus-visible:ring-0 focus:border-2"
              placeholder="Type your message here."
            />
            <button className="text-txt  text-[12px] lg:text-[15px] rounded-md border-[1px] border-accent p-[5px]   hover:bg-accent ease-in-out duration-200  hover:text-background">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;

/*flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"*/
