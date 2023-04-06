## Class Components
****

This a basic example. Both components are correct and they are equivalent the same. In order to pass "props" in class components, we need to inherit properties from the Component Class from React.

```javascript
import { Component } from "react"

export class UserClassComponent extends Component {
  render () {
    return <h4>{this.props.name}</h4>
  }
}

export function UserFunctional({name}){

  return(
    <h4>{name}</h4>
  )
}
```

### useState with Class Components
****

If we want to use useState with Class Components, we don't call the `useState` hook. Instead, inside of the class we defined
some methods to do the same effect as Functional Components.

```javascript
import { Component } from 'react';

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      initialize: true,
      otherKey: 'Other key'
    };
  }

  // It doesn't overrides the entire variables. Only the specified key.
  handleClick() {
    this.setState((prevState) => {
      return { initialize: !prevState.initialize }
    })
  }

  render () {
    return (
      <div>
        <p>Demo Component</p>
        { /* We need to bind the function with 'this' to reference to the this.state component */ }
        <button onClick={this.handleClick.bind(this)}>Click me</button>
        {
          this.state.initialize
          ? <p>It is true</p>
          : <p>It is false</p>
        }
        <p>{this.state.otherKey}</p>
      </div>
    )
  }
}

export default Demo;
```

### useEffect with Class Components
****

The next code is a simple example that emulates the useEffect behavior when working with functional components.

```javascript
import { useState, useEffect, Component } from 'react';
import { UserClassComponent } from './User';
import Demo from './Demo';

const users = [
  {id: 1, name: 'Jorge', age: 34},
  {id: 2, name: 'Juan', age: 23},
  {id: 3, name: 'Omar', age: 18},
  {id: 4, name: 'Ana', age: 28}
]

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
```
