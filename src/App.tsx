import React from 'react';
import List from './List';
import data from './Data';
import Data from './types/types';
import './App.css';

const App: React.FC = () => {
  const [people, setPeople] = React.useState<Data[] | null>(data);

  return (
    <main>
      <section className='container'>
        <h3>Birthdays Today</h3>
        {data !== null && <List data={people} />}

        <button onClick={() => setPeople(null)}>Clear All</button>
      </section>
    </main>
  );
};

export default App;
