import {React, Component} from "react";
import './Signin.css';


class Signin extends Component {

    
    render(){

        const {onRouteChange} = this.props;// destructuring;

        return (
        // from tachyons
        <article className=" general-width br3 ba background b--black-10 mv5  mw5 shadow-5 center">
            <div className="pa2 white">
                <div className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                            className="br1 width95 input-reset b--white ba bg-transparent hover-bg-black hover-white " 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            onChange={this.onEmailChange}
                            />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                            className="b width95 pa2 br1 input-reset b--white ba bg-transparent hover-bg-black hover-white " 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange={this.OnPasswordChange}
                            />
                    </div>
                    
                    </fieldset>
                    <div className="">
                    <input 
                        onClick={this.onSubmitSignin} // rerouting to home
                        className="b ph0 pv2 br1 white input-reset ba b--white bg-transparent grow pointer f6 dib width75" 
                        type="submit" 
                        value="Sign in"
                    />
                    
                    </div>
                    <div className="lh-copy mt3">
                    <p 
                        className="f6 link dim db white center pointer grow"
                        onClick={() => onRouteChange('register')} // rerouting to register
                        >Register
                    </p>
                    
                    </div>
                </div>
            </div>
        </article>
        );
    }
}

export default Signin;