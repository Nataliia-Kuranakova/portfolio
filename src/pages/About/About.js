import { useTheme } from '../../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <section className="about">
      <h1
        className={`about-title ${
          theme === 'dark' ? 'about-title--dark' : 'about-title--light'
        }`}
      >
        About me
      </h1>
      <article className=" about-descr">
        <p>
          Hi, I'm Nataliia and I'm just getting into front-end development after
          coming from an art and design background. Switching to coding has been
          quite difficult at times, but applying design thinking and common
          approaches has really helped me tackle coding problems and even boost
          my creativity in a new environment.
        </p>
        <p>
          Now I really enjoy experimenting with CSS and anything that makes the
          web more attractive, dynamic, fluid and creative.
        </p>

        <p>
          At the moment, I'm focusing on learning the basics of web development
          so that I can start learning more advanced things to help make the web
          a better place for everyone.
        </p>
      </article>
    </section>
  );
};

export default About;
