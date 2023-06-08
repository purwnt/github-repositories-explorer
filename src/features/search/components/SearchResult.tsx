import UserCardList from './UserCardList';
import { User } from '@/interfaces/user';

interface SearchResultProps {
  users: User[];
  keyword?: string;
  isLoading?: boolean;
  isError?: boolean;
}

const SearchResult: React.FC<SearchResultProps> = ({
  keyword,
  users,
  isLoading = false,
  isError = false,
}: SearchResultProps) => {
  return (
    <div className='grid gap-3 mt-3'>
      {keyword || isLoading || isError ? (
        <p className='text-gray-600'>
          {!isError
            ? isLoading
              ? `Searching...`
              : `Showing users for "${keyword}"`
            : 'Something wrong'}
        </p>
      ) : null}
      <UserCardList users={users}></UserCardList>
    </div>
  );
};

export default SearchResult;

