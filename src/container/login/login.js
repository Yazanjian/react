import React, {Component} from 'react'; 
import cardClassStyle from './login.module.css';
import LoginForm from '../../components/login component/loginComponent';
import { connect } from 'react-redux';

let Myemail='';
let Mypassword= '';

class login extends Component {
   
    //to check email , if correct set email falg to true
    checkEmail = (event) => {       
        Myemail= event.target.value;
    }
    //to check password, if correct set password flag to true
    checkPass = (event) => {        
        Mypassword= event.target.value;
    }
  
    render(){ 
        let toRender = null ;   
        console.log('login:' + this.props.loginStatus);     
        if(this.props.loginStatus === true){            
                this.props.history.push({
                    pathname: '/home/',
                });            
        }else{
            toRender= (           
                <div>
                    <LoginForm changeEmail={this.checkEmail} changePass={this.checkPass} CheckData={this.props.checkDataCorrect}/>
                </div>
                );                 
        }
           
        return(
            <div className={cardClassStyle.imgInBackground}>
                {toRender}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.email,
        password: state.password,
        loginStatus: state.login
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        checkDataCorrect: () => dispatch({
            type: 'changeLoginState',
            emailValue: Myemail,
            passwordValue: Mypassword
            })
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(login);