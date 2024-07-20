import "./Counter.scss";
export default function Counter() {
  return (
    <div className="counter-app">
      <h2
        style={{
          color: "green",
          fontSize: "3rem",
          backgroundColor: "yellow",
        }}
      >
        Count: 0
      </h2>
      <button>-</button>
      <button>+</button>
    </div>
  );
}

//background-color ==> backgroundColor
//text-decoraion ==> textDecoration
//text-align ==> textAlign
//transition-timing-function ==> transitionTimingFunctino
