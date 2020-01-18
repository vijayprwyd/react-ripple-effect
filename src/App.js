import React from 'react';
import { Button } from './Button/Button';
import { RadioButton } from './RadioButton/RadioButton';
import { Checkbox } from './Checkbox/Checkbox';

function App() {
  return (
    <div className="App">
      <Button/>
      <RadioButton name = "radio">Option 1</RadioButton>
      <RadioButton name = "radio">Option 2</RadioButton>
      <RadioButton name = "radio">Option 3</RadioButton>

      <Checkbox>Option 1</Checkbox>
      <Checkbox>Option 2</Checkbox>
      <Checkbox>Option 3</Checkbox>

    </div>
  );
}

export default App;
