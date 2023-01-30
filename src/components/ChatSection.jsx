import { ChatField } from "./ChatField"
import { Chats } from "./Chats"

export const ChatSection = () => {
  return (
    <div className=" w-full sm:w-4/5 h-screen bg-gray-800 m-auto">
        <Chats/>
        <ChatField/>
    </div>
  )
}
