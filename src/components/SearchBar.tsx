import React, { ChangeEvent } from "react";

interface SearchBarProps {
  term: string;
  setTerm: (e: ChangeEvent<HTMLInputElement>) => void;
  closeSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  term,
  setTerm,
  closeSearch,
}) => {
  return (
    <div>
      <div className="max-w-md mx-auto mt-6 md:w-80 w-auto overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div>
            <div className="relative h-9">
              <img src="/icons/search.svg" className="absolute my-3 px-2" />
              <input
                type="text"
                className="bg-gray-100 h-9 md:w-80 px-8 focus:outline-none"
                name="search"
                value={term}
                onChange={setTerm}
              />
              {term && (
                <button
                  className="absolute end-2.5 bottom-0.5 top-px flex items-center justify-center w-10 h-full text-gray-600"
                  onClick={closeSearch}
                >
                  <img
                    src="/icons/search-close.svg"
                    className="w-4 h-4"
                    alt="Close Icon"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
