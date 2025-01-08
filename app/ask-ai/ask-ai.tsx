import Input from "components/ui/Input/Input";
import { useState } from "react";

interface MessageDto {
  reply: Boolean;
  content: String;
}

export function AskAI() {
  const [prompt, setPrompt] = useState("");
  const [messageList, setMessageList] = useState<MessageDto[]>([]);

  const send = () => {
    setMessageList([...messageList, { content: prompt, reply: false }]);
    setPrompt("");
  };

  return (
    <div>
      <div className="overflow-y-auto pb-[80px]">
        {messageList.map((v) => (
          <div className="rounded-[8px] px-[16px] py-[14px]">{v.content}</div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-[grey] rounded-[8px]">
            <Input value={prompt} onChange={(e) => setPrompt(e.target.value)} />
            <button onClick={send}> send it</button>
        </div>
       
      </div>
    </div>
  );
}
