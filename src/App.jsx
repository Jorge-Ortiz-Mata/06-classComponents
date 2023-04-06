import './App.css';
import { Users, UsersClass } from './components/Users';
import UsersContext from './store/users-context';
import { useContext } from 'react';

function App() {
  const userCtx = useContext(UsersContext);

  return (
    <UsersContext.Provider value={{users: userCtx.users}}>
      <UsersClass />
    </UsersContext.Provider>
  );
}

export default App;
