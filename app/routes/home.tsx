/*
 * @Author: 娄松 
 * @Date: 2025-01-08 15:19:26
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-08 15:26:16
 * @FilePath: \ask-ai\app\routes\home.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Route } from "./+types/home";
import { AskAI } from "../ask-ai/ask-ai";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ask ai" },
    { name: "description", content: "Welcome to ask ai!" },
  ];
}

export default function Index() {
  return <AskAI />;
}
