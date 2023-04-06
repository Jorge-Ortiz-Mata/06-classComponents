import { Component } from 'react';

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      initialize: true,
      otherKey: 'Other key'
    };
  }

  handleClick() {
    this.setState((prevState => {
      return { initialize: !prevState.initialize }
    }))
  }

  render () {
    return (
      <div>
        <p>Demo Component</p>
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
