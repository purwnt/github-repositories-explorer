import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import RepositoryCardList from './RepositoryCardList';
import { useState } from 'react';
import { useGetUserRepositories } from '@/api/users';

interface UserCardProps {
  username?: string;
}

const UserCard: React.FC<UserCardProps> = ({
  username = '',
}: UserCardProps) => {
  const [toggleRepository, setToggleRepository] = useState(false);
  const { isFetching, error, data, refetch } = useGetUserRepositories(username);

  function handleClick() {
    setToggleRepository(!toggleRepository);
    refetch();
  }

  return (
    <>
      <div
        onClick={handleClick}
        className='flex justify-between bg-gray-100 items-center w-full p-2 cursor-pointer'
      >
        <h3>{username}</h3>
        {toggleRepository ? (
          <ChevronUpIcon className='h-6 w-6 text-gray-900' />
        ) : (
          <ChevronDownIcon className='h-6 w-6 text-gray-900' />
        )}
      </div>
      {isFetching && <p className='text-center'>Loading...</p>}
      {error && <p className='text-center'>Something wrong</p>}
      {toggleRepository ? (
        <RepositoryCardList repositories={data}></RepositoryCardList>
      ) : null}
    </>
  );
};

export default UserCard;

