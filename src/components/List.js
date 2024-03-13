const List = ({ experienceList }) => {
  return (
    <ul className="project-experience-list">
      {experienceList.map((item, index) => {
        return <li className="project-experience-list-item" key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default List;
