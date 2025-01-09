/*
 * @Author: 娄松 
 * @Date: 2025-01-09 09:15:54
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-09 13:43:07
 * @FilePath: \ask-ai\hooks\useChat.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useChat } from 'ai/react'
import { generateId,} from "ai";
import {context} from '../prompts/teacher'
import { useEffect, useState } from 'react'
import { Model } from 'types/Model';

const useChatEdu = () => {

    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')

    const onFinish = () => {
        
    }

    const handleInputChange = e => setInput(e.target.value)

    const {

    } = useChat({
        api: '/api',
        headers: {
            Authorization: `Bearer sk-3d92a33fc3224a9eaf572693eae86b9b`
        },
        body: {
            model: Model.DEEPSEEK
        },
        onFinish,
        onResponse: async (res) => {
            const data =await res.json()
            setMessages([...messages.value,{...data.choice[0].message, id: generateId()}])
        }
    })

    const append = (item) => {
        setMessages([
            ...messages,
            item
        ])
    }



    const onSubmit = () => {
       const promptData =  {
        id: generateId(),
        content: input,
        role: 'user'
    }
        fetch('/api',{
            headers: {
                Authorization: `Bearer sk-3d92a33fc3224a9eaf572693eae86b9b`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                model: Model.DEEPSEEK,
                messages: [...messages,promptData]
            }),
        }).then(async res=>{
            const json =await res.json()
            setMessages(
                [
                    ...messages,
                    promptData,
                    json.choices[0].message
                ]
            )

        })
        setInput('')
    }

    return {
        messages: messages.filter((message) => (message.role !== 'system')),
        input,
        handleInputChange,
        onSubmit
    }
}

export default useChatEdu