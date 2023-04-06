import { useState, useEffect, Component } from 'react';
import { UserClassComponent } from './User';
import Demo from './Demo';

const users = [
  {id: 1, name: 'Jorge', age: 34},
  {id: 2, name: 'Juan', age: 23},
  {id: 3, name: 'Omar', age: 18},
  {id: 4, name: 'Ana', age: 28}
]

// --------------------------------- Class Component --------------------------------

export class UsersClass extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      value: ''
    }
  }

  componentDidMount(){ // This is the equivalent of useEffect without dependencies.
    console.log('It is executed only once, when the component is mounted')
    this.setState({filteredUsers: users})
  }

  componentDidUpdate(prevProps, prevState) { // this method is called always this class is re-render, for example, when updating states.
    if(prevState.value !== this.state.value){
      this.setState({
        filteredUsers: users.filter(user => user.name.includes(this.state.value))
      });
    }
  }

  componentWillUnmount(){ // This method is executed when the component is removed.
    console.log('Removing this component...')
  }

  handleChange(e){
    this.setState({value: e.target.value})
  }

  render() {

    return(
      <div className="App">
        <h1>Class Components - Project.</h1>
        <div>
          <p>Search users</p>
          <input type="text" onChange={this.handleChange.bind(this)} />
        </div>
        {
          this.state.filteredUsers.map(user => <UserClassComponent key={user.id} name={user.name} />)
        }
        <Demo />
      </div>
    )
  }
}


// -------------------------------- Functional Component --------------------------------

export function Users() {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [value, setValue] = useState('');

  useEffect(() => {
    const response = users.filter((user) => user.name.includes(value));
    setFilteredUsers(response)
  }, [value]);


  function handleChange(e) {
    setValue(e.target.value);
  }


  return (
    <div className="App">
      <h1>Class Components - Project.</h1>
      <div>
        <p>Search users</p>
        <input type="text" onChange={handleChange} />
      </div>
      {
        filteredUsers.map(user => <UserClassComponent key={user.id} name={user.name} />)
      }
      <Demo />
    </div>
  );
}
