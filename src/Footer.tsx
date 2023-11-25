function Footer() {
  return (
    <div className=" m-[10px] text-txt lg:m-[20px] text-[10px] lg:text-[13px] flex-col justify-center space-y-2  ">
      <div className="flex justify-center">
        <h1>
          Built by{" "}
          <span className="text-accent "> Himagna Ganti &copy; 2023</span>
        </h1>
      </div>
      <div className="text-center flex justify-center">
        <span>
          All trademarks belong to the respective owners. Icons provided by
          <span>&#160;</span>
          <a
            href="https://www.svgrepo.com/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            svgrepo
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
