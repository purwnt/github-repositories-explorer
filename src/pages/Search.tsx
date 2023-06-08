import SearchForm from '@/features/search/components/SearchForm';
import SearchResult from '@/features/search/components/SearchResult';
import { useState } from 'react';
import { useGetUser } from '@/api/users';

const Search: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [resultKeyword, setResultKeyword] = useState('');
  const { isFetching, error, data, refetch } = useGetUser(keyword);

  function handleChange(value: string) {
    setKeyword(value);
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    refetch();
    setResultKeyword(keyword);
  }

  return (
    <div className='bg-gray-200 py-10 px-4 md:px-0 min-h-screen'>
      <div className='bg-white max-w-sm mx-auto p-4 min-h-[89vh]'>
        <SearchForm
          keyword={keyword}
          onChange={handleChange}
          onClick={handleClick}
        ></SearchForm>
        {data ? (
          <SearchResult
            isLoading={isFetching}
            isError={error as boolean}
            keyword={resultKeyword}
            users={data.items}
          ></SearchResult>
        ) : null}
      </div>
    </div>
  );
};

export default Search;

