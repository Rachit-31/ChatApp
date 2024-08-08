import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import { ImBin } from "react-icons/im";

const Message = ({ message }) => {
	const [loading, setLoading] = useState(false);
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";
	const handleDelete = async () => {
		setLoading(true);
		try {
		  const res = await fetch(`/api/messages/${message._id}`, {
			method: 'DELETE',
		  });
	
		  if (res.ok) {
			// setMessages(message.filter((msg) => msg._id !== message._id));
			window.location.reload(); 
		  } else {
			const error = await res.json();
			console.error(error.message);
		  }
		} catch (error) {
		  console.error("Error deleting message:", error);
		}finally{
			setLoading(false); 
		}
	  };
	return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>

      {fromMe && <div><button disabled={loading} onClick={handleDelete}>{loading ? 'Deleting...' : <ImBin className="text-red-500" />}</button></div>}
    </div>
  );
};
export default Message;