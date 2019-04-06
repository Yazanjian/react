import React from 'react';
import cardClassStyle from '../../container/login/login.module.css';

const loginFrom = (props) => {
    return(
        <div className={cardClassStyle.general}>
            
            <form>
                <h1 className={cardClassStyle.h1}> Log in  </h1>
                <span className={cardClassStyle.labelAndInput}>
                    <input type="Email" id="email" name="email" placeholder="Your email" required onChange={props.changeEmail}/>
                </span>
                <span className={cardClassStyle.labelAndInput}>
                    <input type="password" id="password" name="password" placeholder="Your password" required  onChange={props.changePass}/>
                </span>
                <button type="submit" onClick={props.CheckData}>Login</button>
            </form>                   
        </div>
    );
}

export default loginFrom; 