/*
 * @Author: 娄松 
 * @Date: 2025-01-08 16:58:04
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-08 17:01:50
 * @FilePath: \ask-ai\components\ui\MdToHtml\MdToHtml.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from 'react'
import markdownit from "markdown-it";

export function MdToHtml({markdown}:{markdown: String}) {
    const md = markdownit()

    return <div dangerouslySetInnerHTML={{__html: md.render(markdown)}}></div>
}