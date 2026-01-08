const Button = ({ href, text }) => {
  return (
    <>
      <div className="lg:bg-primary lg:inline-block lg:relative lg:min-w-40 lg:min-h-12 lg:rounded group">
        <a
          href={href}
          className="btn lg:group-hover:translate-x-2.5 lg:group-hover:-translate-y-2.5 lg:absolute lg:top-0 lg:left-0 lg:w-full bg-white"
        >
          {text}
        </a>
      </div>
    </>
  );
};

export default Button;
