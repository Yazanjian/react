import React, {Component} from 'react'; 
import cardClassStyle from './login.module.css';
import {withRouter} from 'react-router-dom';

class login extends Component {
    state = {
        email: 'yazan@hotmail.com',
        password: '123',
        correctEmailFlag:false,
        correctPassFlag:false,
        flagForTheFirstAcsess:true
    }
    //to check email , if correct set email falg to true
    checkEmail = (event) => {
       // console.log(this.props.location.state);
        if(event.target.value === this.state.email){            
            this.setState({correctEmailFlag:true});
         //else statement to make sure if the user enter the last email value correct   
        }else{
            this.setState({correctEmailFlag:false});
        }
    }
    //to check password, if correct set password flag to true
    checkPass = (event) => {
        console.log(event.target.value);
        console.log(this.state.password);
        if(event.target.value === this.state.password){            
            //console.log('hello from check password!');
            //console.log(this.state.correctPassFlag);
            this.setState({correctPassFlag:true});
        }else{
            this.setState({correctPassFlag:false});
        }
    }

    //for login button, if all is correct go to home page 
    checkIfTheDataIsCorrect =  () => {
        if(this.state.correctEmailFlag && this.state.correctPassFlag){
            // this.props.router.push({
            //     pathname: '/home/',
            //     state: {
            //       id: 7,
            //       color: 'green'
            //     }
            //   })
             //this.props.location.state.loginValue =false;
            // this.setState({flagForTheFirstAcsess:false});
            this.props.history.push({
                pathname: '/',
                state:{loginValue:true}
            });
        }
    }

    render(){ 
        console.log(this.props);
        let toRender = null ; 
            
        if((this.props.location.state === undefined)){
            toRender= (
            
                <div className={cardClassStyle.general}>
                    <form>
                            <span className={cardClassStyle.labelAndInput}>
                                <input type="Email" id="email" name="email" placeholder="Your email" required onChange={this.checkEmail}/>
                            </span>
                            <span className={cardClassStyle.labelAndInput}>
                                <input type="password" id="password" name="password" placeholder="Your password" required  onChange={this.checkPass}/>
                            </span>
                        <button type="submit" onClick={this.checkIfTheDataIsCorrect}>Login</button>
                    </form>                   
                </div>
            
            );
           
        }else{
            //this.props.location.state.loginValue= false;
            
            this.props.history.push({
                pathname: '/home/',
                state:{value:true}
            });
        }   
        return(
            <div className={cardClassStyle.imgInBackground}>
                {toRender}
            </div>
        );
    }
}
export default login;