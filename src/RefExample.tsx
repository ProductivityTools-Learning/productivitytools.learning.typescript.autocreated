import { useRef } from 'react';

export function RefExample() {
  const inputRef = useRef<HTMLInputElement>(null);
  function doSomething() {
    console.log('All properties and method sof the input', inputRef.current);
    inputRef.current?.focus();
  }
  return (
    <div>
      RefExample
      <input ref={inputRef} type="text"></input>
      <button onClick={doSomething}>doSomething</button>
    </div>
  );
}
