import { Routes, Route } from 'react-router-dom';

import RegisterPage from 'Pages/RegisterPage';
import LoginPage from 'Pages/LoginPage';
import TODOPage from 'Pages/TODOPage';

import { routes } from 'routes';
import { ContextProvider } from 'Context/context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path={routes.register} element={<RegisterPage />} />
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.todo} element={<TODOPage />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
