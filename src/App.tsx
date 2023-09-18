import {Routes, Route} from "react-router-dom"

import TODOPage from "./Pages/TODO page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TODOPage/>}/>
      </Routes>
    </div>
  )
}

export default App;
