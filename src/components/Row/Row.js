import { skills } from '../../data/skills';

const Row = () => {
  return (
    <section className="scrolling-skills">
      <p className="skills primary">
        {Array(16)
          .fill(skills)
          .map((elem, index) => {
            return (
              <span title="skills string" key={index}>
                {elem}
              </span>
            );
          })}
      </p>
    </section>
  );
};

export default Row;
