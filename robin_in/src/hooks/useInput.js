import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (callback) => (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      callback();
    }
  };

  return {
    value,
    handleChange,
    handleKeyDown,
  };
};

export default useInput;
