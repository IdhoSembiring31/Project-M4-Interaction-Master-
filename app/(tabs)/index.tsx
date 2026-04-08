import React, { useState } from 'react';


const GreetingHeader = (props) => {
  return (
    <div style={{ marginBottom: '40px', textAlign: 'center' }}>
      <h1>Halo, {props.nama || '...'}!</h1>
      <input 
        type="text" 
        placeholder="Ketik namamu..." 
        value={props.nama}
        onChange={props.onNameChange}
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

const CounterBox = ({ nilai, tambah, kurang }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '2px solid #333', borderRadius: '15px' }}>
      <h2>Counter System</h2>
      <h1 style={{ fontSize: '50px' }}>{nilai}</h1>
      
      <button onClick={kurang} style={buttonStyle}>-</button>
      <button onClick={tambah} style={buttonStyle}>+</button>
    </div>
  );
};


const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');

  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div style={{ 
      backgroundColor: bgColor, 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      transition: '0.3s' 
    }}>
      
     
      <GreetingHeader 
        nama={name} 
        onNameChange={(e) => setName(e.target.value)} 
      />

      <CounterBox 
        nilai={count} 
        tambah={() => setCount(count + 1)} 
        kurang={() => count > 0 && setCount(count - 1)} 
      />

      <button 
        onClick={changeColor} 
        style={{ ...buttonStyle, marginTop: '30px', width: '200px', backgroundColor: '#333', color: 'white' }}
      >
        Ganti Warna Background
      </button>

    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '20px',
  margin: '0 10px',
  cursor: 'pointer',
  borderRadius: '8px',
  border: 'none',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
};

export default App;