import React from 'react'
import ContentElement from './ContentElement'

function ContentRow(props){
    return (
        <div className='row workshop-row'>
            <ContentElement
            link={props.link1}
            title={props.title1}
            description={props.description1}
            number={props.number1}
            />
            <ContentElement
            link={props.link2}
            title={props.title2}
            description={props.description2}
            number={props.number2}
            />
            <ContentElement
            link={props.link3}
            title={props.title3}
            description={props.description3}
            number={props.number3}
            />
        </div>
    )
}

export default ContentRow