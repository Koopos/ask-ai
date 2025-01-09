/*
 * @Author: 娄松
 * @Date: 2025-01-08 17:08:11
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-09 14:10:01
 * @FilePath: \ask-ai\components\ui\PromptInput\PromptInput.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from "react";

interface PromptInputProps extends React.ComponentProps<"input"> {
    onSend: () => void
}

const PromptInput = React.forwardRef<
  HTMLInputElement,
  PromptInputProps
>(({ value, onChange, onSend, ...props }, ref) => {
  return (
    <form onSubmit={onSend}>
    <input value={value} onChange={onChange} placeholder="saysomething" className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl" style={{border: '1px solid #ccc'}} />
  </form>

  );
});

export default PromptInput;
