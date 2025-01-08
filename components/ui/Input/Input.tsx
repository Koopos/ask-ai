/*
 * @Author: 娄松 
 * @Date: 2025-01-08 15:50:38
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-08 16:33:57
 * @FilePath: \ask-ai\components\ui\Input\Input.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { cn } from 'lib/util'
import * as React from 'react'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({className, ...props}, ref) => {
    return (
        <input ref={ref} {...props} />
    )
})

export default Input