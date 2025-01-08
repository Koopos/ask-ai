/*
 * @Author: 娄松 
 * @Date: 2025-01-08 17:08:11
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-08 17:29:45
 * @FilePath: \ask-ai\components\ui\PromptInput\PromptInput.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from 'react'

const PromptInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({value, onChange, onSend,...props}, ref) => {
    return (
        <div className="bg-[#eee] rounded-[8px] p-[12px] max-w-[500px] mb-[60px]" style={{margin: '0 auto 60px auto'}}>
            <textarea className="outline-none w-full"  value={value} onChange={onChange} {...props} style={{display: 'none'}} />
            <div className="w-full h-[60px]" contentEditable>
                <p className="w-full h-[60px]" data-placeholder="发送信息"></p>
            </div>
            <div className="flex justify-end text-[12px]" onClick={onSend}>send</div>
        </div>
    )
})

export default PromptInput