import React, { useState } from 'react';

function CheckboxExample({isChecked,setIsChecked}) {
 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Checkbox
      </label>
      <p>{isChecked ? 'Checkbox is selected' : 'Checkbox is not selected'}</p>
    </div>
  );
}

export default CheckboxExample;
