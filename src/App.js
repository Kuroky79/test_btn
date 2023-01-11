import React, {useEffect, useState} from 'react';

const App = () => {
    const [data, setData] = useState(null);
    const [togle, setTogle] = useState(false)

    const onClick = () => setTogle(prev => !prev)

    useEffect(()=>{
        setTimeout(()=>{
            setData({})
        },300)
    },[])
  return (
      <div>
          {togle === true && <div data-testid='togle-test'>togle</div>}
          {data && <div>data</div>}
        <h1> Happy hacking!!!</h1>
        <button data-testid='togle-test' onClick={onClick}>click</button>
        <input type="text" placeholder="input value..."/>
      </div>
  );
};

export default App;
