import { Component } from "react";

class PageHome extends Component {
  state = { value: 0 };

  componentDidMount() {
    console.log("PageHome#didMount");
  }

  componentWillUnmount() {
    console.log("PageHome#willUnmount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("PageHome#didUpdate", {
      prevProps,
      prevState,
      newProps: this.props,
      newState: this.state,
    });
  }

  render() {
    return (
      <h1 onClick={() => this.setState({ value: this.state.value + 1 })}>
        Home
      </h1>
    );
  }
}

export default PageHome;
