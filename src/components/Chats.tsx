import { Chat } from '../index'

type props = {
  chats: {
    text: string,
    type: string,
  }
}

export default function Chats({chats} :props): JSX.Element {
  return (
    <div className="chat-message">
      {chats.map((chat, index) => {
        return <Chat text={chat.text} type={chat.type} key={index.toString()} />
      })}
    </div>
  )
}
