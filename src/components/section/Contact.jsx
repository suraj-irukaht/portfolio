import { contact } from "../../data";
import Button from "../UI/Button";
const Contact = () => {
  const { title, description } = contact;
  return (
    <section id="Contact">
      <div className="container">
        <div className="text-center max-w-[500px] mx-auto">
          <h2 className="no-decor">{title}</h2>
          <p className="mb-10">{description}</p>
          <Button href="tel:+358449522869" text="Contact Me" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
