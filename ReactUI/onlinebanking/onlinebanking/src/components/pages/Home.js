import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="main">
            <div className="adminlogin">
                <div className="divhead"><h3>Admin Login</h3></div>
                <form>
                    <div className="divinput">
                        <label>AdminId</label>
                        <input className="inout" type="text" placeholder="Enter AdminId" /></div>
                    <div className="divinput">
                        <label>Password</label>
                        <input className="inout" type="password" placeholder="Enter Password" /></div>
                    <br>
                    </br>
                    <button>Login Admin</button>
                </form>

            </div>
            <div className="userlogin">
                <div className="divhead"><h3>User Login</h3></div>
                <form>
                    <div className="divinput">
                        <label>User Id :</label>
                        <input className="inout" type="text" placeholder="Enter UserId" /></div>
                    <div className="divinput">
                        <label>Password:</label>
                        <input className="inout" type="password" placeholder="Enter Password" /></div>
                    <br>
                    </br>
                    <button>Login User</button>
                </form>

            </div>





        </div>)
}

    //   /* <div className="main">
    //       <div className='admin'>
    //       <form className='login'>
    //             <h4 className="head">Login</h4>
    //             <br/>
    //                 <label for="fname">Admin Id</label>
    //                 <input type="text" id="email" name="email" placeholder="Enter Email Id" />

    //                 <label for="lname">Password</label>
    //                 <input type="text" id="pass" name="pass" placeholder="Enter password" />

    //                 <input type="submit" value="Submit" />
    //             </form>




    //       </div>
    //         <div className='register'>
    //             <form className='login'>
    //             <h4 className="head">Login</h4>
    //             <br/>
    //                 <label for="fname">User Id</label>
    //                 <input type="text" id="email" name="email" placeholder="Enter Email Id" />

    //                 <label for="lname">Password</label>
    //                 <input type="text" id="pass" name="pass" placeholder="Enter password" />

    //                 <input type="submit" value="Submit" />
    //             </form>
    //         </div> */
    //     /* </div>
    // //  </div>  

