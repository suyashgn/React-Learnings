import React from 'react';

function ChildButton({ onClick }) {
  console.log('ChildButton rendered');
  return <button onClick={onClick}>Click Me</button>;
}

export default React.memo(ChildButton);
