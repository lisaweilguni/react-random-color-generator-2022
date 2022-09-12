import './App.css';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import randomColor from 'randomcolor';
import { useState } from 'react';

randomColor();
function App() {
  const [color, setColor] = useState('');
  const [hueUserInput, setHueUserInput] = useState('');
  const [luminosityUserInput, setLuminosityUserInput] = useState('');

  return (
    <div>
      <h1>Random Color Generator</h1>
      <div
        className="colorbox"
        style={{
          width: '400px',
          height: '600px',
          margin: '0 auto',
          display: 'flex',
          backgroundColor: color,
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          borderRadius: '25px',
          border: '3px solid white',
          marginTop: '30px',
        }}
      >
        Generated Color: <br /> {color}
      </div>
      <br />
      <br />
      <button
        onClick={() => {
          setColor(randomColor());
        }}
      >
        <span>Generate</span>
      </button>
      <br />
      <div>
        <label htmlFor="hue">Choose hue:</label>
        <input
          placeholder="Your Color"
          id="hue"
          value={hueUserInput}
          onChange={(event) => {
            setHueUserInput(event.currentTarget.value);

            const userHue = event.currentTarget.value;
            if (
              userHue === 'red' ||
              userHue === 'orange' ||
              userHue === 'yellow' ||
              userHue === 'green' ||
              userHue === 'blue' ||
              userHue === 'purple' ||
              userHue === 'pink' ||
              userHue === 'monochrome'
            ) {
              setColor(
                randomColor({
                  luminosity: 'random',
                  hue: userHue,
                }),
              );
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
