import { StarIcon } from '@heroicons/react/24/solid';
import { Repository } from '@/interfaces/repository';

const RepositoryCard: React.FC<Repository> = ({
  name = 'Repository Title',
  description = 'Repository Description',
  stargazers_count = 0,
}: Repository) => {
  return (
    <div className='flex justify-between bg-gray-200 items-start p-2 ml-5 min-h-[90px]'>
      <div className='grid'>
        <h4 className='font-bold text-lg'>{name}</h4>
        <p>{description}</p>
      </div>
      <div className='flex gap-1 justify-end items-center'>
        <span className='font-bold'>{stargazers_count}</span>
        <StarIcon className='h-5 w-5 text-gray-900' />
      </div>
    </div>
  );
};

export default RepositoryCard;

