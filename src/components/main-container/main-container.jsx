import React from 'react';
import Infoboards from './infoboards';

const MainContainer = () => {
  let infoboards = true;

  return (
    <main>
      <h1>Info Board</h1>
      { infoboards && <Infoboards /> }
    </main>
  );
};

export default MainContainer;
