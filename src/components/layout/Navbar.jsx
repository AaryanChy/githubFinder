import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Navbar = ({ title }) => {
  return (
    <nav className='navbar mb-12 shadow-lg bg-white text-black'>
      <div className='container mx-auto'>
        <div className='flex px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold'>
            {title}
          </Link>
        </div>

        <div className='flex-1 px2 mx2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "GitHub Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;
