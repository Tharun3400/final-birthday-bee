import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/HomePage">Home</Link>
        </li>
        <li>
          <Link to="/birthday-info">Info</Link>
        </li>
        <li>
          <Link to="/notification">Notification</Link>
              </li>
              <li>
                  <Link to="/feedback">Feedback</Link>
              </li>
      </ul>
      
    </nav>
  );
};

export default NavBar;
