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
