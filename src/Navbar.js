import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [snap,setSnap] = useState(window.innerWidth)
    const newsnap = () => {
        setSnap(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',newsnap)
        return () => {
            window.removeEventListener('resize',newsnap)
        }
    },[snap])
  const style1 = {
    marginRight: 'auto',
    width:'20px'
  }
  const colorStyle = {
    color: "#0b5ed7"
  }
  return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid justify-content-center position-relative">
          <img src="icon.png" className="d-inline float-start" style={style1}/>
          {snap > 1186 && <a href="" className="display-6 position-absolute" style={colorStyle}>B</a>}
            <Link to="/"><a className="navbar-brand pe-5">
              Home
              <img src="icon.png" style={{width:'20px'}} className="d-inline-block align-self-center"/>
            </a></Link>
            <Link to="/about"><a className="navbar-brand pe-5">About</a></Link>
            <Link to="/projects"><a className="navbar-brand pe-5">Projects</a></Link>
            <Link to="/"><a className="navbar-brand pe-5">Contact Me</a></Link>
        </div>
      </nav>
  )

}

export default Navbar
