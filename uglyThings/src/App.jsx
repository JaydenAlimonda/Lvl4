import React from 'react';
import { UglyContextProvider } from './Context';
import Display from './components/DisplayCreatedUgly'
import CreatePost from './components/CreatePost'

const App = () => {
  

  return (
  <>
    <UglyContextProvider>
        <CreatePost/>
        <Display />
    </UglyContextProvider>
  </>
  );
};

export default App;
