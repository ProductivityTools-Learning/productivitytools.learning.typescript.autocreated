import React from 'react';
import './App.css';
import { Alert } from './Alert';
import { ReducerExample } from './ReducerExample';
import { RefExample } from './RefExample';

function App() {
  return (
    <div className="App">
      <Alert heading="sucess" closable>
        gone!
      </Alert>
      <hr />
      <ReducerExample />
      <hr />
      <RefExample />
    </div>
  );
}

export default App;
