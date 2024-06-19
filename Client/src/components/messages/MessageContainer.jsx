import Messages from "./Messages"
const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
        <>
        <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span> <span className="text-gray-900 font-bold">Rachit Jain</span>
        </div>
        </>
        <Messages/>
    </div>
  )
}

export default MessageContainer