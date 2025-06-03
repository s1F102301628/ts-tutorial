import './App.css'
import {useState} from "react";
function App() {
  return (
      <>
        <LikeButton />
      </>
  )
}

function LikeButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
  <span className="likeButton" onClick={handleClick}>
  ♥ {count}
  </span>
);
}
export default App
