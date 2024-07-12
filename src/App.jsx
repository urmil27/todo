import React from 'react';
import Background from './compo/Background';
import Foreground from './compo/Foreground';

function App() {
  return (
    <div className='w-full h-screen bg-zinc-800'>
        <Background />
        <Foreground />
    </div>
  );
}

export default App;
