import './App.css';
import Demo from './components/Demo';
import { UserFunctional, UserClassComponent } from './components/User';

function App() {
  const users = [
    {id: 1, name: 'Jorge', age: 34},
    {id: 2, name: 'Juan', age: 23},
    {id: 3, name: 'Omar', age: 18},
    {id: 4, name: 'Ana', age: 28}
  ]


  return (
    <div className="App">
      <h1>Class Components - Project.</h1>
      {
        users.map(user => <UserClassComponent key={user.id} name={user.name} />)
      }
      <Demo />
    </div>
  );
}

export default App;
