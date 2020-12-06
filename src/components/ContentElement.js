import React from 'react'

function ContentElement(props){
    if(props.title == null){
        return (
            <div className='col-md'>
            </div>
        )
    }
    
    return (
        <div className='col-md divider'>
            <a href={props.link} target='_blank' className='workshop-title'><strong>{props.number}</strong>: {props.title}</a>
            <p className='text-muted'>{props.description}</p>
        </div>
    )
}

export default ContentElement