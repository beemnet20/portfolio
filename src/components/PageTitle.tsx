import React from 'react';

const PageTitle: React.FC<{ title: string; id: string }> = ({ title, id }) => {
  return (
    <h1
      className='text-4xl font-bold mb-8'
      id={id}
      style={{ scrollMarginTop: '100px' }}
    >
      {title}{' '}
      <span
        style={{ width: '200px' }}
        className='h-2 inline-block bg-yellow-900'
      ></span>
    </h1>
  );
};

export default PageTitle;
