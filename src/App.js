import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Generator from './Generator';
import Box from './Box';

function App() {
  const [color, setColor] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    console.log(boxes)
  }, [boxes])
  return (
    <div className="App">
      <div>
        <Generator setColor={setColor} setIsSubmitted={setIsSubmitted} setBoxes={setBoxes} boxes={boxes} />
      </div>
      <div>
        {boxes.length > 0 &&
          boxes.map((box, i) => {
            return (
              <Box key={i} color={box} className="box" />

            )

          })

        }
      </div>
    </div>
  );
}

export default App;
