import React from 'react';
import '../../App.css';
import './Home.css';

export default function Home() {
  return (
    <div>
      <h1 className='home'></h1>
      <div className="main">
            <div className='register'>
                <form className='login'>
                <h4>Login</h4>
                <br/>
                    <label for="fname">Email Id</label>
                    <input type="text" id="email" name="email" placeholder="Enter Email Id" />

                    <label for="lname">Password</label>
                    <input type="text" id="pass" name="pass" placeholder="Enter password" />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </div> );
}
