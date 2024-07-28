import { useEffect, useContext } from "react";
import {
  FaCodepen,
  FaStore,
  FaUser,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import { GithubContext } from "../context/github/GithubContex";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReposList from "../components/repos/ReposList";
const User = () => {
  const { getUser, showUser, loading, getUserRepos, repos } =
    useContext(GithubContext);
  const params = useParams();
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = showUser;
  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
  }, []);
  loading && <h1>Loading....</h1>;
  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back To Search
          </Link>
        </div>
        <div className='grid grid-col-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card image-full'>
              <figure>
                <img src={avatar_url} alt='' />
              </figure>
              <div className='card-body'>
                <h2 className='card-title mb-0  text-white'>{name}</h2>
                <p className='text-white'>{login}</p>
              </div>
            </div>
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {name}
                <div className='ml-2 mr-1 badge badge-success'>{type}</div>
                {hireable && (
                  <div className='mx-1 badge badge-info'>Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className='mt-4 card-actions'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className='w-full rounded shadow-md bg-base-100 stats '>
              {location && (
                <div className='p-2 stat'>
                  <div className='stat-title text-md'>Location</div>
                  <div className='text-lg stat-value'>{location}</div>
                </div>
              )}
              {blog && (
                <div className='p-2 stat '>
                  <div className='stat-title text-md '>Web Site</div>
                  <div className='text-lg stat-value'>
                    <a href={blog} target='_blank' rel='noreferrer'>
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className='p-2 stat '>
                  <div className='stat-title text-md '>Twitter</div>
                  <div className='text-lg stat-value'>
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
          <div className='stat'>
            <div className='stat-figure text-purple-700'>
              <FaUsers className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Followers</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {followers}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-purple-700'>
              <FaCodepen className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Public Repos</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {public_repos}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-purple-700'>
              <FaStore className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Public Gist</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {public_gists}
            </div>
          </div>
        </div>
        <ReposList repos={repos} />
      </div>
    </>
  );
};

export default User;
