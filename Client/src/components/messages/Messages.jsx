import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"
const Messages = () => {
  const { messages, loading } = useGetMessages();
  //console.log(messages)
  return (
    <div className="px-4 flex-1 overflow-auto">
        <Message/>
    </div>
  )
}

export default Messages

//3:39:28 continue from now