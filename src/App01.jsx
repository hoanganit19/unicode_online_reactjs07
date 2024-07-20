import { useState } from "react";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import Posts from "./components/Posts/Posts";
import Products from "./components/Products/Products";
export default function App() {
  const [color, setColor] = useState("#fff");
  const handleChangeColor = () => {
    setColor("green");
  };
  return (
    <>
      <GlobalStyles color={color} />
      <div className="app-container">
        <h1 className="title">
          React <span>JS</span>
        </h1>
        <Products />
        <Posts onClick={handleChangeColor} />
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          ducimus harum. Et praesentium aspernatur sunt corporis. Quidem
          praesentium, hic totam quam possimus, similique libero ea facilis
          nobis nisi aut harum!
        </div>
      </div>
    </>
  );
}
