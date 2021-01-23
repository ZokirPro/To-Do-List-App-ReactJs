import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle=()=>{
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed?'line-through':'none',
        }
    }
    render() {
        const {id,title,completed}=this.props.todo
         
        return (
            <div style={this.getStyle()}>
               <p>
                    <input type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this,id)} ></input>{'  '}   
                    {title}
                    <button style={buttonStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
                </p>
            </div>
        )
    }
}

const buttonStyle={
    background:'red',
    color:'white',
    padding:'5px 9px',
    border:'none',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right',
    fontSize:'20px',
    transform:'TranslateY(-5px)',
    outline:'none'
}

//prop types
TodoItem.propTypes={
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
  }
export default TodoItem 
