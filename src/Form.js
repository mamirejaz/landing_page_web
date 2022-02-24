import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import './App.css';
import { Header } from './components'
import { Footer } from './footerComponent'
import privacypolicy from './Privacy Notice - MyWorld.pdf';
export default function Form() {
    let navigate = useNavigate();
    const CheckUserExist = async (email) => {
        return await fetch('http://localhost:5000/userExists',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    isBusiness: isBusiness
                })
            }).then((response) => response.json());
    }
    const routeChange = async (e) => {
        e.preventDefault();
        if (country === '' || email === '' || postalcode === '' || code === '') {
            setError(true);
        } else {
            if (isCodeVerified === false) {
                alert("Kindly verify your Code first!!!")
                return;
            }
            if (email !== codetimeemail) {
                alert("You have not verified your code for the provided email!!!");
                return;
            }
            let route = isBusiness ? 'add-business' : 'add-user';
            fetch('http://localhost:5000/' + route, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    country: country,
                    email: email,
                    postalcode: postalcode,
                    code: code

                })
            }).then(response => response.json()).then(resp => {
                if (resp !== "") {
                    let path = '/thankyou';
                    sendGreetingEmail();
                    navigate(path,
                        { state: { data: resp} });
                }
                else
                    alert("Something bad happened, Kindly try again!!!");
            })



        }
    }
    // States for registration
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [codetimeemail, setCodeTimeEmail] = useState('');
    const [postalcode, setPostalCode] = useState('');
    const [code, setCode] = useState('');

    const [countryDDColor, setcountryDDColor] = useState('grey');


    const [isBusiness, setIsBusiness] = useState(false);
    const [isCodeVerified, setIsCodeVerified] = useState(false);
    const [IsToShowYearsSwitch, setIsToShowYearsSwitch] = useState(true);

    const [codeNotVerified, setCodeNotVerified] = useState(false);


    let [vcode, setVCode] = useState('');

    const [businessownershow, setBusinessOwnerShow] = useState(false);

    let [countries, setCountries] = useState([]);
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const [isCodeSent, setIsCodeSent] = useState(false);
    const [IsCodeSentAgain, setIsCodeSentAgain] = useState(false);

    const GetCountries = async () => {
        return await fetch('http://localhost:5000/countries').then((response) => response.json()).then((result) => {
            countries = result;
            setCountries(countries);
            return result;
        }
        )
    };
    // Send Email.........
    const sendmail = async (e) => {
        debugger;
        e.preventDefault();
        if (email === "") {
            alert("Enter a valid email!!!")
            return;
        }
        setCodeTimeEmail(email);
        var isUserExist = await CheckUserExist(email);
        if (isUserExist !== false && isUserExist !== "") {
            alert("User Already Exists!!!");
            return;
        }

        vcode = Math.floor(100000 + Math.random() * 900000) + "";
        setVCode(vcode)
        var data = {
            "verification_code": vcode,
            "to_email": email
        }
        emailjs.send('landingpage_1234', 'template_gons7wu', data, 'user_CrBoZZHqq9leyv1IiNhWs')
            .then((result) => {
                setIsCodeSent(true);
            }, (error) => {
            });
    };
    const sendMailAgain = async (e) => {
        e.preventDefault();
        debugger;
        var data = {
            "verification_code": vcode,
            "to_email": email
        }
        emailjs.send('landingpage_1234', 'template_gons7wu', data, 'user_CrBoZZHqq9leyv1IiNhWs')
            .then((result) => {
                setIsCodeSentAgain(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    const sendGreetingEmail = async (e) => {
        var data = {
            "referral_id": e.referralId,
            "to_email": email
        }
        emailjs.send('landingpage_1234', 'template_wshevpd', data, 'user_CrBoZZHqq9leyv1IiNhWs');
    };
    const verifyCode = (e) => {
        if (code === vcode) {
            setIsCodeVerified(true);
            setCodeNotVerified(false)
        }
        else {
            setCodeNotVerified(true)
            setIsCodeVerified(false);
        }
    };
    // Handling the Country change

    const handleCountry = (e) => {
        if (e.target.options[e.target.selectedIndex].text !== "Select Country")
        setcountryDDColor('white')
        else
        setcountryDDColor('grey')
        setCountry(e.target.options[e.target.selectedIndex].text);
        setSubmitted(false);
    };

    // Handling the PostalCode change
    const handlePostalCode = (e) => {
        setPostalCode(e.target.value);
        setSubmitted(false);
    };

    // Handling the Email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the Email Code change
    const handleCode = (e) => {
        setCode(e.target.value);
        setSubmitted(false);
    };

    // To enable/show the business owner check
    const enableBusinessOwner = (e) => {
        setIsToShowYearsSwitch(false);
        if (e.target.checked === true)
            setBusinessOwnerShow(true);
        else
            setBusinessOwnerShow(false);

    };
    const ShowEmailSendAgain = () => {
            return <>
                <div className="col-sm-6 my-2" style={{ display: isCodeSent ? '' : 'none' }}>
                    <span><b>The code will expire in 10 minutes. </b></span>
                    <a href='#' onClick={sendMailAgain}><b>SEND AGAIN</b></a>
                    <span><b>.</b></span>
                </div>
                <div className="col-sm-3 my-2" style={{ display: IsCodeSentAgain ? '' : 'none' , color : "green"}}>
                    <span style={{color : "green"}}><b>Code sent again!!!</b></span>
                </div>
                {/* <div className="col-sm-12 my-2" style={{ display: isCodeVerified ? "" : "node" }}>
                    <span><b>Code has been Verified.</b></span>
                </div> */}
                </>

    }
    const verifyCodeRow = () => {
        if (isCodeSent === true)
            return <>
                <div className="col-sm-4 my-2">
                    <input type="text" className="form-control bg-transparent" style={{ color: "white", opacity: 1, fontWeight: "bold", }} id="inlineFormInputName" onChange={handleCode} placeholder="Code" />
                </div>
                <div className="col-sm-2 my-2">
                    <button className="btn bg-white" onClick={verifyCode}>
                        <b>
                            VERIFY
                        </b>
                    </button>
                </div>
                <div className="col-sm-2 my-2" style={{ display: isCodeVerified ? '' : 'none' }}>
                    <span style={{ "color": "green" }}>
                        <b>
                            Code Verified!!!
                        </b>
                    </span>
                </div>
                <div className="col-sm-2 my-2" style={{ display: codeNotVerified ? '' : 'none' }}>
                    <span style={{ "color": "red" }}>
                        <b>
                            Code Not Verified!!!
                        </b>
                    </span>
                </div>
            </>
    }
    const CheckUserIsBusiness = (e) => {
        if (e.target.checked === true)
            setIsBusiness(true);
        else
            setIsBusiness(false);
    };
    const BusinessOwnerCheck = () => {
        return (
            <>
                <div className="col-sm-8" style={{
                    display: businessownershow ? '' : 'none',
                }}>
                    <label style={{ fontSize: '24px' }}>
                        <b>
                            Are you a brick-and-morter business owner?
                        </b>
                    </label>
                </div>
                <div className="col-sm-1">
                    <div className='messages' style={{ fontSize: '24px' }}>
                        <div
                            className="form-check form-switch"
                            style={{
                                display: businessownershow ? '' : 'none',
                            }}>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={CheckUserIsBusiness} />
                        </div>
                    </div>
                </div>
            </>
        )
    };
    const UserForm = () => {
        return (
            <>
                <div className="container"
                    style={{
                        display: businessownershow ? '' : 'none',
                    }}>
                    {/* Labels and inputs for form data */}
                    <div className="row">
                        <div className="col-sm-3">
                        </div>
                        <div className="col-sm-9">
                            <div className="row">
                                <div className="col-sm-4 my-2">
                                    {
                                        <select className="form-select bg-transparent" style={{ color: countryDDColor, opacity: 1, fontWeight: "bold"}} onChange={handleCountry}>
                                            <option>Select Country</option>
                                            {
                                                countries.map(country => {
                                                    return <option key={country.name}>{country.name}</option>
                                                })
                                            }
                                        </select>
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4 my-2">
                                    <input type="text" className="form-control bg-transparent" style={{ color: "white", opacity: 1, fontWeight: "bold", }} id="inlineFormInputName" onChange={handlePostalCode} placeholder="Postal Code" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4 my-2">
                                    <input type="text" className="form-control bg-transparent" style={{ color: "white", opacity: 1, fontWeight: "bold", }} id="inlineFormInputName" onChange={handleEmail} placeholder="Email Address" />
                                </div>
                                <div className="col-sm-2 my-2">
                                    <button className="btn bg-white" onClick={sendmail}>
                                        <b>
                                            SEND CODE
                                        </b>
                                    </button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-sm-6 my-2">
                                    <span style={{ fontSize: '15px' }}><b>By clicking SEND code, you're confirming that you have read and acknowedged the </b></span>
                                    <a href={privacypolicy} target="_blank">Privacy Policy</a>
                                    <span style={{ fontSize: '15px' }}><b>.</b></span>
                                </div>
                            </div>
                            <div className="row">
                                {verifyCodeRow()}
                            </div>
                            <div className='row'>
                                {ShowEmailSendAgain()}
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ textAlign: 'center', padding: '4%', display: businessownershow ? '' : 'none' }}>
                    <button type="submit" style={{ fontSize: '36px' }} className="btn bg-white text-center" onClick={routeChange}>
                        <span className='multi-color-text'>
                            <b>
                                ENTER
                            </b>
                        </span>
                    </button>
                </div>
            </>
        )
    }


    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h3>Signup Successful!!</h3>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h3>Please enter all the fields</h3>
            </div>
        );
    };

    useEffect(() => {
        GetCountries()
    }, [])
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-sm my-4">
                                <h1 style={{ fontSize: '48px' }}><b>Your community awaits. Enjoy it.</b></h1>
                            </div>
                        </div>
                        <div className="row" style={{ display: IsToShowYearsSwitch ? '' : 'none' }}>
                            <div className="col-sm-6">
                                <label style={{ fontSize: '24px' }}><b> Are you 18 years old or older?</b></label>
                            </div>
                            <div className="col-sm-6 my-1" >
                                <div className="form-check form-switch" style={{ fontSize: '24px' }}>
                                    <label htmlFor="flexSwitchCheckDefault"></label>
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={enableBusinessOwner}></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {BusinessOwnerCheck()}
                        </div>
                        <div className="row">
                            <div className="col-sm-6 my-1">
                                <div className="messages">
                                    {errorMessage()}
                                    {successMessage()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {UserForm()}
        </div>
    );
}
