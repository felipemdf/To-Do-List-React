import React, {Component} from 'react';
import './styles.css'

import Task from '../Task';

class CardProgress extends Component{
    render(){
        return (
            <div className='CardProgress-container'>
                <div className='CardProgress-header'>
                    <h3>{this.props.stageText}</h3>
                </div>
                <div className='CardProgress-body'>
                   {this.props.tasks?.map((task, index) => {
                       if(task.stage === this.props.stageText){
                           return <Task text = {task.text} key={index}/>
                       }else{
                           return null;
                       }
                   })}
                </div>
            </div>
        );
    };
};

export default CardProgress;