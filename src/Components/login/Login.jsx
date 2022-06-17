import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { Container, Form } from "./LoginStyles";

export function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        var credData = JSON.parse(localStorage.getItem("Creds")) || []
        console.log('credData:', credData)
        

        if (credData.email === credentials.email && credData.password === credentials.password) {
            alert("Login Successful")
            navigate("/");
        } else if (credData.length === 0) {
            alert("Please Create Account first.")
        } else {
            alert("Wrong Credentials")
        }
    };


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }

    return (
        <Container>
            <div className="cont">
                <div className="cont2">
                    <div className="heading">
                        <h2>Login</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <div className="socials">
                            <div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" />
                            </div>
                            <div>
                                <img src="https://i.pinimg.com/originals/91/4d/e6/914de662ac57138cda4a401ff37b444e.jpg" alt="" />
                            </div>
                        </div>
                        <div className="login-email">

                            <input
                                name="email"
                                placeholder="Email"
                                onChange={onChange}
                                type="email"
                                id="customer_email"
                            />
                        </div>
                        <div className="login-password">

                            <div className="text-over-input">
                                <input
                                    name="password"
                                    placeholder="Password"
                                    onChange={onChange}
                                    type="password"
                                    id="customer_password"
                                />
                            </div>
                        </div>
                        <div className="action-bottom">
                            <p>
                                <input
                                    type="submit"
                                    value="Login"
                                    className="btn"
                                />
                            </p>
                            <div style={{ textAlign: "center" }}>
                                New customer?
                                <Link to="/account/register">
                                    <span style={{ marginLeft: "125px" }}>Create an account</span>{" "}
                                </Link>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </Container>
    )
}