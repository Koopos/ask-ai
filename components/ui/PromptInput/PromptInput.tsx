/*
 * @Author: 娄松
 * @Date: 2025-01-08 17:08:11
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-09 08:40:22
 * @FilePath: \ask-ai\components\ui\PromptInput\PromptInput.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from "react";

interface PromptInputProps extends React.ComponentProps<"textarea"> {
    onSend: () => void
}

const PromptInput = React.forwardRef<
  HTMLInputElement,
  PromptInputProps
>(({ value, onChange, onSend, ...props }, ref) => {
  return (
    <div className="">
      <div
        className="bg-[#eee] rounded-[8px] p-[12px] mb-[30px] "
        style={{}}
      >
        <div className="h-[60px]">
          <textarea
            className="outline-none w-full"
            value={value}
            onChange={onChange}
            {...props}
          />
        </div>
        <div className="flex justify-end text-[12px]" onClick={onSend}>
          send
        </div>
      </div>
    </div>
  );
});

export default PromptInput;
