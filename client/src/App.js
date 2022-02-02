import { useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001")

function App() {

  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  function joinRoom(){
      if (username !== "" && room !== ""){
        
      }
  }

  return (
    <div className="App">
      <h3>Join A Chat</h3>
      <input 
        type="text" 
        placeholder="John..." 
        onChange={e=>setUsername(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Room ID..." 
        onChange={e=>setRoom(e.target.value)}
      />
      <button>Join A Room</button>
    </div>
  );
}

export default App;
