import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card shadow-md side bg-base-100 '>
      <div className='flex-row items-center space-x-4 card-body'>
        <div className='avatar'>
          <div className='rounded-full w-14 h-14'>
            <img
              src={avatar_url}
              alt='profile Image'
              className='object-cover rounded-full h-40'
            />
          </div>
        </div>
        <div>
          <h2 className='card-title'>{login}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/users/${login}`}
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
