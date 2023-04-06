import { Component } from 'react';
import { UserClassComponent } from './User';
import UsersContext from '../store/users-context';
import Demo from './Demo';

// --------------------------------- Class Component --------------------------------

export class UsersClass extends Component {
  static contextType = UsersContext

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      value: ''
    }
  }

  componentDidMount(){ // This is the equivalent of useEffect without dependencies.
    // console.log('It is executed only once, when the component is mounted')
    this.setState({ filteredUsers: this.context.users })
  }

  componentDidUpdate(prevProps, prevState) { // this method is called always this class is re-render, for example, when updating states.
    if(prevState.value !== this.state.value){
      this.setState({
        filteredUsers: this.context.users.filter(user => user.name.includes(this.state.value))
      });
    }

    if(this.state.filteredUsers.length < 1){
      throw new Error('WTF!')
    }
  }

  componentWillUnmount(){ // This method is executed when the component is removed.
    // console.log('Removing this component...')
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
