import {Routes, Route} from "react-router-dom"

import TODOPage from "./Pages/TODO page";
import LoginPage from "./Pages/Login page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="todo-app" element={<TODOPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App;
