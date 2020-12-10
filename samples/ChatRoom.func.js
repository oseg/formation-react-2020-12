import { useEffect } from "react";

const ChatRoom = ({ room = "#general" }) => {
  useEffect(
    () => {
      // Mise en place
      chat.listen(room);
      return () => {
        // Nettoyage
        chat.unlisten(room);
      };
    },
    // Conditions
    [room]
  );

  return "...";
};

export default ChatRoom;

/*

// 1st render
ChatRoom({ room: '#general' })
→ chat.listen('#general');
  cleanup = () => chat.unlisten('#general')

// 2nd render
ChatRoom({ room: '#toto' })
→ cleanup() → chat.unlisten('#general')
  chat.listen('#toto')
  cleanup = () => chat.unlisten('#toto')

*/
