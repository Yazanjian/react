import React from 'react';
import './home.css';

const homeComponent = (props) => {
    return (
        <div >                        
            <div className="counterAndButtons">
                <div className='buttonGroup'>
                    <p className='heartBeat'>
                        Total Number of Sales:  {props.counter}
                    </p>
                                    
                    <button className='add' onClick={props.addButton}>Add a sale </button>
                    <button  className='remove' onClick={props.removeButton}> remove a sale </button>
                </div>
                <button className='logout' onClick={props.logOutButton} > Log out </button>                            
            </div>
        </div>
    );
}

export default homeComponent;