import { useContext } from "react";
import UserItem from "./UserItem";
import { GithubContext } from "../../context/github/GithubContex";
const UserResults = () => {
  const { users, loading } = useContext(GithubContext);
  return !loading ? (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2'>
      {users.map((users) => (
        <UserItem key={users.id} user={users} />
      ))}
    </div>
  ) : (
    <div className='text-center text-2xl'>
      <h1 className='font-bold'>Loading .....</h1>
    </div>
  );
};

export default UserResults;
