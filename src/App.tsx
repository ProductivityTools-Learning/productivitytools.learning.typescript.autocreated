import React from 'react';
import './App.css';
import { Alert } from './Alert';
import { ReducerExample } from './ReducerExample';

function App() {
  return (
    <div className="App">
      <Alert heading="sucess" closable>
        gone!
      </Alert>
      <ReducerExample />
    </div>
  );
}

export default App;
