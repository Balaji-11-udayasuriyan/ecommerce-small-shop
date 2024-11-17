import React, { useState } from "react";

const ForgetPassword = () => {

    const [randomNumbers, setRandomNumbers] = useState([8, 6, 7, 5]); // Initial numbers

    const generateNumbers = () => {
        const newNumbers = Array.from({ length: 4 }, () => Math.floor(1 + Math.random() * 9));
        setRandomNumbers(newNumbers);
    };

    const classes = ['text-new', 'text-hot', 'text-sale', 'text-best'];

    return(

        <div>

            <main class="main pages">
                    <div class="page-header breadcrumb-wrap">
                        <div class="container">
                            <div class="breadcrumb">
                                <a href="/" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                                <span></span> Pages <span></span> My Account
                            </div>
                        </div>
                    </div>
                    <div class="page-content pt-150 pb-150">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-4 col-lg-6 col-md-12 m-auto">
                                    <div class="login_wrap widget-taber-content background-white">
                                        <div class="padding_eight_all bg-white">
                                            <div class="heading_s1">
                                                <img class="border-radius-15" src="frontend/imgs/page/forgot_password.svg" alt="" />
                                                <h2 class="mb-15 mt-15">Forgot your password?</h2>
                                                <p class="mb-30">Not to worry, we got you! Let’s get you a new password. Please enter your email address or your Username.</p>
                                            </div>
                                            <form method="post">
                                                <div class="form-group">
                                                    <input type="text" required="" name="email" placeholder="Username or Email *" />
                                                </div>
                
                     {/*--------------------------------------security code generator-----------------------------------------------*/}
                                                        
                                                <div class="login_footer form-group">
                                                    <div class="chek-form">
                                                        <input type="text" required="" name="email" placeholder="Security code *" />
                                                    </div>
                                                        <span className="security-code">
                                                                { randomNumbers.map((number, index) => (
                                                                    <b key={index} className={classes[index]}>
                                                                        {number}
                                                                    </b>
                                                            ))}
                                                        </span> 
                                                </div>

                    {/*-------------------------------------- generate number button ------------------------------------------ */}
                                                <div class="form-group">
                                                    <button
                                                        class="btn btn-heading btn-block hover-up"
                                                        onClick={(event) => {
                                                        event.preventDefault(); // Prevent navigation or default action
                                                        generateNumbers(); // Call the function to generate numbers
                                                        }}
                                                        >
                                                        Generate Numbers
                                                    </button>
                                                </div>  
                    {/*--------------------------------------------------------------------------------------------------------*/}
                                                <div class="login_footer form-group mb-50">
                                                    <div class="chek-form">
                                                        <div class="custome-checkbox">
                                                            <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                                            <label class="form-check-label" for="exampleCheckbox1"><span>I agree to terms & Policy.</span></label>
                                                        </div>
                                                    </div>
                                                    <a class="text-muted" href="#">Learn more</a>
                                                </div>
                                                <div class="form-group">
                                                    <button type="submit" class="btn btn-heading btn-block hover-up" name="login">Reset password</button>    
                                                    <br />
                                                    <button type="submit" class="btn btn-heading btn-block hover-up" name="login">back</button>
                                                     </div>
                                                
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

        </div>
    );
};

export default ForgetPassword;