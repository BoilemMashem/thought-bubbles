import { useLayoutEffect, useState, createRef } from 'react'

function App() {
  const [message, setMessage] = useState('');
  const [thought, setThought] = useState('');
  const inputRef = createRef();

  useLayoutEffect(() => {
    inputRef.current.focus();
  }, [])

  function valueChanged(event) {
    setMessage(event.currentTarget.value);
  }

  function commitThought(event) {
    if (event.key === 'Enter') {
      setThought(message);
      setMessage('');
    }
  }

  return (
    <div style={{paddingLeft: '10%', paddingTop: '5%'}}>
      <h1 style={{fontSize: '4em'}}>{thought}</h1>
      <input type='text' 
             value={message} 
             ref={inputRef}
             style={{position: 'absolute', left: '-9999px'}}
             onChange={(event) => setMessage(event.currentTarget.value)}
             onKeyPress={(event) => commitThought(event)}/>
    </div>
  );
}

export default App;
