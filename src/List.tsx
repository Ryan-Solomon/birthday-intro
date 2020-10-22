import React from 'react';
import Data from './types/types';

interface Props {
  data: Data[] | null;
}

function List(props: Props) {
  if (props.data === null) {
    return <div>No Data</div>;
  }
  const renderedList = props.data.map((personObject) => {
    const { id, name, age, image } = personObject;
    return (
      <article key={id} className='person'>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    );
  });

  return <div>{renderedList}</div>;
}

export default List;
