import RepositoryCard from './RepositoryCard';
import { Repository } from '@/interfaces/repository';

interface RepositoryCardListProps {
  repositories: Repository[] | undefined;
}

const RepositoryCardList: React.FC<RepositoryCardListProps> = ({
  repositories,
}: RepositoryCardListProps) => {
  return (
    <div className='grid gap-3'>
      {repositories?.map((repository) => (
        <RepositoryCard
          key={repository.id}
          id={repository.id}
          name={repository.name}
          description={repository.description}
          stargazers_count={repository.stargazers_count}
        ></RepositoryCard>
      ))}
    </div>
  );
};

export default RepositoryCardList;

