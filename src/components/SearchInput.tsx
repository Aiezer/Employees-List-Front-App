import React from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchInputProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className='py-5'>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Pesquisar"
          className="text-gray-20 h3 fount-normal w-full h-11 pl-5 p-4 py-2 border border-gray-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-20"
        />
        <BsSearch className="text-gray-10 absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
      </div>
    </div>
  );
};

export default SearchInput;