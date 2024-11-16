import React, { useState }  from "react";

const Login = () =>{

    const [randomNumbers, setRandomNumbers] = useState([8, 6, 7, 5]); // Initial numbers

    const generateNumbers = () => {
        const newNumbers = Array.from({ length: 4 }, () => Math.floor(1 + Math.random() * 9));
        setRandomNumbers(newNumbers);
    };

    const classes = ['text-new', 'text-hot', 'text-sale', 'text-best'];

    return(

        <div>

                    {/*login page */}
                                        
                    <main class="main pages">
                    <div class="page-header breadcrumb-wrap">
                        <div class="container">
                            <div class="breadcrumb">
                                <a href="index.html" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                                <span></span> Pages <span></span> My Account
                            </div>
                        </div>
                    </div>


                    <div class="page-content pt-150 pb-150">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-8 col-lg-10 col-md-12 m-auto">
                                    <div class="row">
                                        <div class="col-lg-6 pr-30 d-none d-lg-block">
                                            <img class="border-radius-15" src="assets/imgs/page/login-1.png" alt="" />
                                        </div>
                                        <div class="col-lg-6 col-md-8">
                                            <div class="login_wrap widget-taber-content background-white">
                                                <div class="padding_eight_all bg-white">
                                                    <div class="heading_s1">
                                                        <h1 class="mb-5">Login</h1>
                                                        <p class="mb-30">Don't have an account? <a href="/register">Create here</a></p>
                                                    </div>
                                                    <form method="post">
                                                        <div class="form-group">
                                                            <input type="text" required="" name="email" placeholder="Username or Email *" />
                                                        </div>
                                                        <div class="form-group">
                                                            <input required="" type="password" name="password" placeholder="Your password *" />
                                                        </div>

                    {/*--------------------------------------security code generator-----------------------------------------------*/}
                                                        
                                                        <div class="login_footer form-group">
                                                             <div class="chek-form">
                                                            <input type="text" required="" name="email" placeholder="Security code *" />
                                                        </div>
                                                        <span className="security-code">
                                                             {randomNumbers.map((number, index) => (
                                                                <b key={index} className={classes[index]}>
                                                                    {number}
                                                                </b>
                                                            ))}
                                                         </span> 
                                                        </div>

                    {/*-------------------------------------- generate number button ------------------------------------------ */}
                                                        
                                                        <button
                                                            onClick={(event) => {
                                                            event.preventDefault(); // Prevent navigation or default action
                                                            generateNumbers(); // Call the function to generate numbers
                                                            }}
                                                            >
                                                            Generate Numbers
                                                        </button>

                    {/*--------------------------------------------------------------------------------------------------------*/}
                                                        <div class="login_footer form-group mb-50">
                                                            <div class="chek-form">
                                                                <div class="custome-checkbox">
                                                                    <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                                                    <label class="form-check-label" for="exampleCheckbox1"><span>Remember me</span></label>
                                                                </div>
                                                            </div>
                                                            <a class="text-muted" href="/forgetpassword">Forgot password?</a>
                                                            <a class="text-muted" href="/resetpassword">Reset password?</a>
                                                        </div>
                                                        <div class="form-group">
                                                            <button type="submit" class="btn btn-heading btn-block hover-up" name="login">Log in</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
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

export default Login;