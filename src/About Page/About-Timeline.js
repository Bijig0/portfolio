import React from "react";
import { animateScroll as Scroll  } from "react-scroll";


const Timeline = () => {
    const languages = ['Python','HTML/CSS','React.js']
    return ( <>
        <h1 className='display-1 text-center py-3'> Timeline </h1>
        <div style={{height:'30vw'}}>
        </div>
        {languages.map((language) => {
            return <EachNav language={language} id={language}/>
        })}
        </>)
}

const EachNav = (props) => {
    const backToTop = () => {
        Scroll.scrollToTop()
    }
    const {language,id} = props
    return (
        <div className='d-flex' style={{padding:"30vw"}} id={id}>
            <div className="col-md-4 d-flex justify-content-center">
            <h1 className='card-title'>{language}</h1>
            <img src="" className='rounded-circle'/>
            </div>
            <p className="lead" style={{marginLeft:'auto'}}>What happens if I write more words to the More default text that will flex wrap I think</p>
            <button onClick={backToTop} className="btn btn-outline-primary">Back to the top</button>
        </div>
    )
}

export default Timeline
