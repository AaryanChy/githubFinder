import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const NotFound = () => {
  return (
    <div className='hero'>
      <div className='text-center hero-content '>
        <div className='max-w-lg'>
          <h1 className='text-8xl font-bold mb-8'>Oops!!</h1>
          <p className='text-5xl mb-8'>404 Not Found</p>
          <Link to='/'>
            <button className='btn btn-primary'>
              <FaHome className='mr-1' />
              Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
