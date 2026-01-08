import { banner } from "../../data";
import Button from "../UI/Button";

const Banner = () => {
  const { subtitle, name, tagLine, description } = banner;

  return (
    <section className="min-h-screen flex items-center" id="Home">
      <div className="container">
        <div className="lg:text-xl">
          <span className="subtitle">{subtitle}</span>
          <h1 className="text-4xl lg:text-6xl text-dark mb-2">{name}</h1>
          <h2 className="text-4xl lg:text-6xl font-extrabold no-decor mb-4 leading-none">
            {tagLine}
          </h2>
          <div className="max-w-[580px] lg:max-w-[700px] mb-8">
            <p>{description}</p>
          </div>
          <Button
            href="mailto:&#115;&#117;&#114;&#097;&#106;&#115;&#104;&#097;&#104;&#105;&#051;&#051;&#049;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
            text="Contact Me"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
