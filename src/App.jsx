import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./router";
import Header from "@components/Header";

function App() {
  return (
    <Router>
      <div className="flex flex-wrap content-center justify-center min-h-screen bg-indigo-400">
        <div className="flex flex-col w-6/12 shadow-2xl h-96">
          <Header />

          <div className="flex flex-wrap content-center justify-center flex-1 font-mono text-white rounded-b-lg bg-violet-600">
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
