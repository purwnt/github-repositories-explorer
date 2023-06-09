import Button from '@/components/elements/button/Button';
import Input from '@/components/forms/input/Input';

interface SearchFormProps {
  keyword: string;
  onChange: (value: string) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onReset: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  keyword = '',
  onChange,
  onClick,
  onReset,
}: SearchFormProps) => {
  return (
    <>
      <form className='grid gap-4'>
        <Input
          value={keyword}
          onChange={onChange}
          onReset={onReset}
          placeholder='Enter username'
        ></Input>
        <Button disabled={!keyword} onClick={onClick} text='Search'></Button>
      </form>
    </>
  );
};

export default SearchForm;

