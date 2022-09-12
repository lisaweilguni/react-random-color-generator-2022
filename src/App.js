import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

randomColor();
function App() {
  const [color, setColor] = useState('#9C66CC');
  const [hueUserInput, setHueUserInput] = useState('');

  return (
    <div>
      <h1>Random Color Generator</h1>
      <div
        className="colorbox"
        style={{
          width: '400px',
          height: '300px',
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
      <div className="custom-field">
        <label htmlFor="hue" className="placeholder">
          <span>Choose hue:</span>
        </label>
        <input
          placeholder="Enter your color here"
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
