/*
 * @Author: 娄松 
 * @Date: 2025-01-08 16:28:27
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-08 16:29:34
 * @FilePath: \ask-ai\lib\util.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}