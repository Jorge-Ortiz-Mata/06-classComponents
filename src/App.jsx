import './App.css';
import { UsersClass } from './components/Users';
import UsersContext from './store/users-context';
import { useContext } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const userCtx = useContext(UsersContext);

  return (
    <UsersContext.Provider value={{users: userCtx.users}}>
      <ErrorBoundary>
        <UsersClass />
      </ErrorBoundary>
    </UsersContext.Provider>
  );
}

export default App;
