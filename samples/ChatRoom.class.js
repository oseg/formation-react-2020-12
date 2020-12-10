import { Component } from "react";

class ChatRoom extends Component {
  static defaultProps = {
    room: "#general",
  };

  componentDidMount() {
    chat.listen(this.props.room);
  }

  componentWillUnmount() {
    chat.unlisten(this.props.room);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.room !== this.props.room) {
      chat.unlisten(prevProps.room);
      chat.listen(this.props.room);
    }
  }

  render() {
    return "...";
  }
}

export default ChatRoom;
