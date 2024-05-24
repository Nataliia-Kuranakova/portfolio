import { useTheme } from '../context/ThemeContext';

const TableList = ({ list }) => {
  const { theme } = useTheme();
  const itemBg =
    theme !== 'light'
      ? 'project-goals-item-light-bg'
      : 'project-goals-item-dark-bg';

  return (
    <ul className="project-goals">
      <div className="project-goals-title">
        {list.titles.map((title, index) => (
          <p key={index}>{title}</p>
        ))}
      </div>

      {list.lists[0].map((_, itemIndex) => (
        <li className="project-goals-item" key={itemIndex}>
          {list.lists.map((list, listIndex) => (
            <p className={itemBg} key={listIndex} data-testid="paragraph">
              {list[itemIndex]}
            </p>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default TableList;
