import React, { useState } from 'react';

function Search({ setSearchQuery }) {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    setInput(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={input}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
