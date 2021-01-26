import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div style={headerStyle}>
            <h1>ToDo List</h1>
            <Link to="/" style={linkStyle}>Home</Link> | {' '}
            <Link to="/about" style={linkStyle}>About</Link> 
            {/* {' '}<a href="https://github.com/ZokirPro/To-Do-List-App-ReactJs"  style={linkStyle}>Github</a> */}
        </div>
    )
}

const headerStyle={
    background:'#333',
    color:'white',
    padding:'10px',
    textAlign:'center',

}
const linkStyle={
    color:'white',
    textDecoration:'none'
}
