import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { Link as Scroller  } from "react-scroll";
import '../override.css'
import {Link} from "react-router-dom";
import Timeline from "./About-Timeline";
const Languages = () => {
    return (
        <div>
            <div className='jumbotron'>
                <div className='container'>
                    <h1 className='display-1'>Languages that I know</h1>
                    <p className='lead'>These are the languages I know</p>
                    <Link to='/'><a>
                        <button className="btn d-flex justify-content-end">Go Back</button>
                    </a></Link>
                </div>
            </div>
             <CodeCard/>
             <Timeline/>
        </div>
    )
}

const CodeCard = () => {
    const [show,setShow] = useState(true)
    useEffect(()=> {
        setShow(JSON.parse(localStorage.getItem("keyvalue")))
    },[])
    useEffect(()=> {
        localStorage.setItem("keyvalue",show)
    },[show])
    if (show) {
            return (
            <div className="d-flex justify-content-center">
                <div className="card col-md-2">
                    <img src="icon.png" className="card-img-top"/>
                        <div className="card-header">
                            <h1 className="card-title" onClick={() => setShow(false)}>Click me to show the three</h1>
                            <p className="card-text">Filler Text</p>
                        </div>
                </div>
            </div>
    )
    }
    else {
        return (
            <>
            <CardList/>
            <button onClick={()=> setShow(true)}>setshow true</button>
            </>
        )
    }

}

const CardList = () => {
    const NumberOfitems = ['Python','HTML/CSS','React.js']
    return (
        <div className='container'>
            <div className='row'>
                <div className='d-flex py-2 justify-content-center'>
                    {NumberOfitems.map((per) => {
                        return (
                            <Card per={per}/>
                            )
                    })}
                </div>
            </div>
        </div>
    )
}

const Card = ({per}) => {
    return (

                    <div className="col-md-3 px-5">
                <img src="icon.png" className="card-img-top"/>
                    <div className="card-header">
                          <Scroller
                              to={per}
                              spy={true}
                              smooth={true}
                              offset={250}
                              duration={100}
                          >
                        <h1 className="card-title">Coding</h1>
                          </Scroller>
                        <p className="card-text">Im a god at coding</p>
                    </div>
            </div>
    )
}


export default Languages
