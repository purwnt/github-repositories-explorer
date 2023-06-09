import { ChangeEvent } from 'react';

interface InputProps {
  value?: string;
  placeholder?: string;
  type?: string;
  onChange: (value: string) => void;
  onReset: () => void;
}

const Input: React.FC<InputProps> = ({
  value = '',
  placeholder = '',
  type = 'text',
  onChange,
  onReset,
}: InputProps) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.code === 'Escape') {
      onReset();
    }
  }

  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className='border border-gray-300 bg-gray-100 w-full focus:outline-none px-4 py-1.5 placeholder:text-gray-400'
      />
    </>
  );
};

export default Input;

