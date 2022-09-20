import {React, Component} from "react";
import './Registration.css';


class Registration extends Component {

    
    render(){

        const {onRouteChange} = this.props;// destructuring;

        return (
            // from tachyons
            <article className=" general-width br3 ba background b--black-10 mv4  mw5 shadow-5 center">
                <main className="pa2 black-80 center">
                    <div className="measure white center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Register here!</legend>
                        <div className="mt3">
                        
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input  
                                className="pa2 br1 center input-reset b--black ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="name"  
                                    id="name"
                                    onChange={this.onNameChange}
                                    />
    
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                                className="pa2 br1 center input-reset b--black ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={this.onEmailChange}
                                />
                        </div>
                        <div className="mv3">
    
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input  
                                className="b center pa2 br1 input-reset b--black ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={this.onPasswordChange}
                                />
                        </div>
                        
                        </fieldset>
                        <div className="">
                        <input 
                            onClick={this.onSubmitChange} // reouting to signin
                            className="b ph3 center white pv2 br1 center input-reset ba b--black bg-transparent grow pointer f6 dib w-50" 
                            type="submit" 
                            value="register"
                        />
                        </div>
                        <div className="lh-copy white mt3">
                        <p 
                            onClick={() => onRouteChange('signin')} // reouting to signin
                            className="f6 center white link dim db"
                            >Sign in
                        </p>
                        
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Registration;