import { useState } from "react";

function Tab({ children }) {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  const moveHighlightHandler = (e) => {
    setHighlightStyle({ left: e.nativeEvent.layerX - 75 });
  };

  function hideHighlightHandler(e) {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 75,
    });
  }

  return (
    <div
      className="relative flex-1 py-3 overflow-hidden text-center rounded-t-lg cursor-pointer bg-violet-500"
      onMouseMove={moveHighlightHandler}
      onMouseOut={hideHighlightHandler}
    >
      <div
        className="absolute block w-5/6 h-24 duration-200 ease-in rounded-full opacity-25 pointer-events-none -top-5 bg-gradient-radial from-violet-400 to-violet-500"
        style={highlightStyle}
      />
      <div className="block">{children}</div>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-wrap content-center justify-center min-h-screen bg-indigo-400">
      <div className="flex flex-col w-6/12 shadow-2xl h-96">
        <div className="flex w-full px-3 pt-3 font-mono text-base text-white rounded-t-lg bg-amber-300">
          <Tab>
            <a href="/">Home</a>
          </Tab>
          <Tab>
            <a href="/">About</a>
          </Tab>
          <Tab>
            <a href="/">Features</a>
          </Tab>
        </div>

        <div className="flex flex-wrap content-center justify-center flex-1 font-mono text-white rounded-b-lg bg-violet-600">
          <p>Pages go here</p>
        </div>
      </div>
    </div>
  );
}

export default App;
