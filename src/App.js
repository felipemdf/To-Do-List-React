import React, {Component} from 'react';
import './assets/App.css';

import CardProgress from './components/CardProgress';

class App extends Component{
  constructor(){
    super();
    this.taskText = '';
    this.state = {
      tasks: []
    }
    this.stages = ['To Do', 'Doing']
  }

  handlerInsertTask(event){
    this.taskText = event.target.value;
    event.stopPropagation();
  }

  createTask(event){
    event.preventDefault();
    event.stopPropagation();

    const taskObject = {text: this.taskText, stage: 'To Do'};
    const newArrayTask = [...this.state.tasks, taskObject];
    this.setState({tasks: newArrayTask});
    
    event.target.reset();

  }

  

  render(){
    return (
      <div className='container'>
        <nav>
          <h1> To Do List</h1>
          <a href='https://github.com/felipemdf'>https://github.com/felipemdf</a>
        </nav>
        <form className='inputTask' onSubmit={this.createTask.bind(this)}>
          <input onChange= {this.handlerInsertTask.bind(this)} type='text' placeholder='Write your task here!'/>
          <button>Add</button>
        </form>
        
        <main>
          <CardProgress stageText={'To Do'} tasks = {this.state.tasks}/> 
          <CardProgress stageText={'Doing'} tasks = {this.state.tasks}/>
          <CardProgress stageText={'Paused'} tasks = {this.state.tasks}/>
          <CardProgress stageText={'Done'} tasks = {this.state.tasks}/>
        </main>
      </div>
    );
  };
};


export default App;
