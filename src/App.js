import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

randomColor();
function App() {
  const [color, setColor] = useState('#9C66CC');
  const [hueUserInput, setHueUserInput] = useState('');
  const [colorLightness, setColorLightness] = useState('');

  return (
    <div>
      <h1>Random Color Generator</h1>
      <div
        className="colorbox"
        style={{
          width: '400px',
          height: '800px',
          margin: '50px 10px 10px 10px',
          display: 'flex',
          backgroundColor: color,
        }}
      >
        Generated Color: {color}
      </div>
      <br />
      <br />
      <button
        onClick={() => {
          setColor(randomColor());
        }}
      >
        Generate
      </button>

      <div className="selectors">
        <div className="custom-field">
          <label htmlFor="hue">
            <span>🎨 Choose hue:</span>
          </label>
          <select
            id="hue"
            value={hueUserInput}
            onChange={(event) => {
              setHueUserInput(event.currentTarget.value);

              const hueUserInputSelected = event.currentTarget.value;
              setColor(
                randomColor({
                  luminosity: 'random',
                  hue: hueUserInputSelected,
                }),
              );
            }}
          >
            <option value="red">red</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="purple">purple</option>
            <option value="pink">pink</option>
          </select>
        </div>

        <div className="custom-field">
          <label htmlFor="luminosity">
            <span>💡 Choose luminosity:</span>
          </label>
          <select
            id="luminosity"
            value={colorLightness}
            onChange={(event) => {
              setColorLightness(event.currentTarget.value);

              const colorLightnessSelected = event.currentTarget.value;
              setColor(
                randomColor({
                  luminosity: colorLightnessSelected,
                  hue: hueUserInput,
                }),
              );
            }}
          >
            <option value="light">light</option>
            <option value="dark">dark</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
