import Box from './components/Box';
import './App.css';
import { useState } from 'react';

function App() {

  const [countP, setCountP] = useState(0); //"contador padre" 
  const [count1,updateCount1] = useState(0);
  const [count2,updateCount2] = useState(0);


function boxClicked(brother) {
  setCountP (countP + 1);
  if (brother === 1) {
    updateCount1 (count1 + 1);
  } else {
    updateCount2 (count2 + 1);
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <Box id={1}  brotherCount={count2} boxClicked={boxClicked}/>
        <Box id={2}  brotherCount={count1} boxClicked={boxClicked}/>
        <p>contador Padre: {countP}</p>
      </header>
    </div>
  );
}

export default App;
