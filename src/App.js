import React,{Component} from  'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Header from  './components/layout/Header'
import AddToDo from './components/AddToDo'
import Todos from './components/Todos';
/* import { v4 as uuidv4 } from 'uuid'; */
import About from './components/pages/About'
import Axios from 'axios';

class App extends Component
{
  state=
  {
    todos:[]
  }
  //GET FROM JSONPLACEHOLDER 
  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>this.setState({todos:res.data}))
  }
  //Toggle mark complete
  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
        if(todo.id===id)
        {
          todo.completed=!todo.completed;
        }
        return todo;
    }) });
    
  }

  //Add to do FROM POST REQUEST TO JSONPLACEHOLDER
   addTodo=(title)=>{
     Axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false}).then(res=>this.setState({todos:[...this.state.todos,res.data]}))
    
  } 

  //delete todo item FROM JSONPLACEHOLDER
  delTodo=(id)=>{
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]}))
  }
  render(){
    //console.log(this.state.todos)
    return (
      <Router>
        <div className="App"> 
          <div className="container">
            <Header/>
                                                        {/* HOME PAGE ROUTER */}
            <Route exact path="/" render={props=>(
                <React.Fragment>
                    <AddToDo addTodo={this.addTodo} />
                    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                </React.Fragment>
                )} 
            />
                                                        {/* ABOUT ROUTER */}
            <Route path="/about" component={About}/>
          </div>
        </div>  
      </Router>
    );
  }
}
export default App;
