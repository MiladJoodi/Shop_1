import React from 'react'

export default function Html() {

    let textHtmlTemplate = `
    <h1>متن عنوان سکشن</h1>
    <p>توضیحات سکشن</p>
    <p>
        <b>توضیحات بولد</b>
    </p>
    `

  return (
    <div dangerouslySetInnerHTML={{__html: textHtmlTemplate}}>
        
    </div>

  )
}
