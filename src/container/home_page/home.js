import React, {Component} from 'react'; 
import './home.css';

class home extends Component {
    state = {
        counter:0
    }

    addHandler = () => {
        let counter = this.state.counter;
        counter=counter+1;        
        this.setState({counter:counter});
    }

    removeHandler = () => {
        let counter = this.state.counter;
        if(counter > 0){
            counter=counter-1;
            this.setState({counter:counter});
        }
        else{
            alert('Empty Cart!');
        }
    }

    logOutHandler = () => {
        this.props.history.push({
            pathname: '/',
            state:undefined
        });
    }
    render(){
       // console.log(this.props);

        let toRender = null; 
        if(this.props.location.state === undefined){
            this.props.history.push({
                pathname: '/'                
            });
        }else{
            if(this.props.location.state.value){
                toRender = (
                    <div >
                        
                        <div className="counterAndButtons">
                        <div className='buttonGroup'>
                            <p className='heartBeat'>
                                Total Number of Sales:  {this.state.counter}
                            </p>
                            
                                <button className='add' onClick={this.addHandler}>Add a sale </button>
                                <button  className='remove' onClick={this.removeHandler}> remove a sale </button>
                            </div>
                            <button className='logout' onClick={this.logOutHandler} > Log out </button>
                            
                        </div>
                    </div>
                );
            }else{
                this.props.history.push({
                    pathname: '/',
                    state:{loginValue:true}
                });
            }
        }    
        return(
            <div >
                {toRender}
            </div>
        );
    }
}
export default home;