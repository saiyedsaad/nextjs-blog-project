import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/heroImg.jpg"
          alt="An image showing Saad"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Saad</h1>
      <p>
        These is a Blog posts about the web develoment frameworks - like React
        and Next JS.
      </p>
    </section>
  );
};

export default Hero;
