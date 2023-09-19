import { Routes, Route } from 'react-router-dom';

import TODOPage from './Pages/TODO page';
import LoginPage from './Pages/Login page';

import { routes } from './routes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.todo} element={<TODOPage />} />
        <Route path={routes.login} element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
