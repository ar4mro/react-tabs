import { useMatch, useResolvedPath, Link } from "react-router-dom";

import { useState } from "react";

function Tab({ children, to }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
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
      className={`${
        isActive ? "bg-violet-700" : "bg-violet-500"
      } relative flex-1 py-3 overflow-hidden text-center rounded-t-lg cursor-pointer`}
      onMouseMove={moveHighlightHandler}
      onMouseOut={hideHighlightHandler}
    >
      <Link to={to}>
        <div
          className="absolute block w-5/6 h-24 duration-200 ease-in rounded-full opacity-25 pointer-events-none -top-5 bg-gradient-radial from-violet-400 to-violet-500"
          style={highlightStyle}
        />
        <div className="block h-full">{children}</div>
      </Link>
    </div>
  );
}

export default Tab;
