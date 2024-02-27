const Footer = () => {
  const thisyear = new Date().getFullYear();
  return (
    <div className="mt-10 text-lg px-2 md:px-10">
      <hr className="border-black/40" />
      <div className="flex my-4 justify-between items-center text-lg text-black/50">
        {" "}
        <p>&copy; kayode.dev {thisyear}</p>
        <div className="flex gap-4 justify-around">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/kayode-dev"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/kayode.docx"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/kayode_txt"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kayode-babalola-a522a6226/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
