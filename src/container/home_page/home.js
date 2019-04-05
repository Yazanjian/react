import React, {Component} from 'react'; 
import HomeComponent from '../../components/Home component/homeComponent';
import { connect } from 'react-redux';

class home extends Component {
    state = {
        counter:0
    }

    logOutHandler = () => {
        if(this.props.loginStatus === false){
            this.props.history.push({
                pathname: '/',
                state:undefined
            });
        }else{
            this.props.history.push({
                pathname: '/home/',                     
            });
        }

    }
    render(){
       // console.log(this.props);
        let toRender = null; 
        console.log('home:'+this.props.loginStatus);

        if(this.props.loginStatus === false){
            this.props.history.push({
                pathname: '/login/',              
            });
        }else{
            if(this.props.loginStatus === true){
                toRender = (                    
                    <div>
                        <HomeComponent 
                         counter={this.props.counterInRedux}
                         addButton={this.props.incrementCounter} 
                         removeButton={this.props.decrementCounter} 
                         logOutButton={this.props.logOut} />
                    </div>
                );
            }
        }    
        return(
            <div >
                {toRender}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counterInRedux: state.counter,
        loginStatus: state.login
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        incrementCounter: () => dispatch({type: 'INCREMENT'}),
        decrementCounter: () => dispatch({type: 'DECREMENT'}),
        logOut: () => dispatch({type: 'LogOut'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(home);