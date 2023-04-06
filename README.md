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
