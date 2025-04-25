import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // API call on component mount
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []); // Empty dependency array = runs once on mount

  return (
    <div>
      <h2>Fetched Post</h2>
      {data ? (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DataFetcher;
