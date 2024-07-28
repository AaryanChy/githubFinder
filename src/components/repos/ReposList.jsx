import PropTypes from "prop-types";
import RepoItems from "./RepoItems";
const ReposList = ({ repos }) => {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl font-bold card-title'>Top Repositories</h2>
        {repos.map((repo) => (
          <RepoItems key={repo.id} repo={repo}/>
         
        ))}
      </div>
    </div>
  );
};

ReposList.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default ReposList;
