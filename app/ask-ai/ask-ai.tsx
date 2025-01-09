import Input from "components/ui/Input/Input";
import { MdToHtml } from "components/ui/MdToHtml/MdToHtml";
import PromptInput from "components/ui/PromptInput/PromptInput";
import useChatEdu from "hooks/useChatEdu";

export function AskAI() {

  const {input, messages, handleInputChange, onSubmit} = useChatEdu() 
  debugger
  return (
    <div>
      <div
        className="overflow-y-auto pb-[80px] max-w-[840px] p-[20px]"
        style={{ height: "100vh", margin: "0 auto" }}
      >
        {messages.map((v) =>
          v.role!=='user' ? (
            <div className="flex mb-[16px]">
              <div className="rounded-[8px] px-[16px] py-[14px] max-w-[800px] text-[12px]">
                <MdToHtml markdown={v.content}></MdToHtml>
              </div>
            </div>
          ) : (
            <div className="flex justify-end w-full mb-[16px]">
              <div className="p-[12px] max-w-[400px] bg-[#eee] text-[14px] rounded-[20px]">
                {v.content}
              </div>
            </div>
          )
        )}
      </div>
      <div className="absolute bottom-[30px] left-0 right-0 px-[40px]">
        <PromptInput value={input} onChange={handleInputChange} onSend={onSubmit} />
      </div>
    </div>
  );
}

