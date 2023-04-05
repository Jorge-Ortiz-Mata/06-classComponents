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
