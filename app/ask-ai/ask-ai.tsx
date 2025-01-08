import Input from "components/ui/Input/Input";
import { MdToHtml } from "components/ui/MdToHtml/MdToHtml";
import PromptInput from "components/ui/PromptInput/PromptInput";
import { useState } from "react";

interface MessageDto {
  reply: Boolean;
  content: String;
}

export function AskAI() {
  const [prompt, setPrompt] = useState("");
  const [messageList, setMessageList] = useState<MessageDto[]>([
    {
      content: `# Changeset 在 Monorepo 中的作用在 **monorepo**（单一代码仓库）中，changeset是一个常用的工具或机制，用于管理和记录多包项目中的变更和版本发布。它通常用于自动化版本控制、变更日志生成和发布流程，尤其是在多包管理的环境中，帮助团队高效地管理不同模块之间的依赖关系和版本发布。

## Changeset 在 Monorepo 中的作用

### 1. 版本管理
Monorepo 中可能包含多个子模块或包。每个子模块都有自己的版本，并且它们之间可能存在依赖关系。使用 changeset可以帮助自动化地管理每个子模块的版本号变更。它会根据每次提交的变更，决定需要提高哪些包的版本。

### 2. 自动生成变更日志
changeset 可以自动生成和维护变更日志。每次进行版本更新时，开发人员可以生成一个 changeset 文件，记录这次更改的内容。这个文件可以描述本
`,
      reply: true,
    },
  ]);

  const send = () => {
    setMessageList([...messageList, { content: prompt, reply: false }]);
    setPrompt("");
  };

  return (
    <div>
      <div
        className="overflow-y-auto pb-[80px] w-[840px] p-[20px]"
        style={{ height: "100vh", margin: "0 auto" }}
      >
        {messageList.map((v) =>
          v.reply ? (
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
      <div className="absolute bottom-0 left-0 right-0">
        <PromptInput value={prompt} onChange={e=>setPrompt(e.target.value)} onSend={send} />
      </div>
    </div>
  );
}
