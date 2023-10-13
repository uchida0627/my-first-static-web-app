import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return <div>
  <h1>{data}</h1>
  <p> Hello world !! </p>
    
    </div>;
}

export default App;
