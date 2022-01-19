import React, {Component} from 'react';
import Icon from '@mdi/react';
import { mdiDelete  } from '@mdi/js'
import './styles.css'
class Task extends Component{
    render(){
        return (
            <div className='Task-container'>
                <div className='Task-text'>
                    <p>{this.props.text}</p>
                </div>
            <Icon path={mdiDelete} size={1} className='Task-Delete'/>
            </div>
        );
    };
};

export default Task;