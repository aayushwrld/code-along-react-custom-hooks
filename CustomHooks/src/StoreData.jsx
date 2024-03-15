import { useEffect, useState } from "react";

function InputText(key, Value) {
  const storing_locally = localStorage.getItem(key);
  const storing_session = sessionStorage.getItem(key);

  if (storing_locally) {
    return JSON.parse(storing_locally);
  }

  if (storing_session) {
    return JSON.parse(storing_session);
  }
  return Value;
}

function StoreData(key, Value) {

  const [input, setInput] = useState(() => InputText(key, Value));

  useEffect(() => {
    const display = JSON.stringify(input);
    localStorage.setItem(key, display);
    sessionStorage.setItem(key, display);
  }, [key, input]);

  return [input, setInput];
}

export default StoreData;
