/*
 * @Author: 娄松 
 * @Date: 2025-01-09 08:47:50
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-09 08:59:08
 * @FilePath: \ask-ai\llm\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Model } from "types/Model";
import deepseek from "./deepseek";

export const generateWithSystemPrompt = async(promptContent: string, model: string): Promise<string> => {
    switch(model) {
        case Model.DEEPSEEK:
            return deepseek.chat.completions.create({
                messages: [{
                    role: "system",
                    content: promptContent,
                }],
                model: "deepseek-chat",
                response_format: {
                    type: "json_object"
                }
            }).then(response => response.choice[0].message.content || "")
            .catch(() => "")
    }
}