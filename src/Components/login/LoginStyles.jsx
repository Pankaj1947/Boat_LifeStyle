import styled from "styled-components";


export const Container = styled.div`
    height: 505px;
    background-color: #141414;
    padding-top: 140px;
    padding-bottom: 30px;
    border: 0.1px solid black;
    color : white !important;
    
    
    input {
        background-color : #141414;
        border-radius : 5px;
        color : white
    }
    a {
        color: #ea2127 !important;
        font-weight: 700;
        text-decoration: underline;
    }

    .cont {
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 40px;
        padding-right: 40px;
    }

    .cont2 {
        margin-left: auto;
        margin-right: auto;
        width: 420px;
        max-width: 100%;
        margin-top: 30px;
    }

    .heading {
        margin: 10px 0px 40px;
    }

    .heading > h2 {
        text-align: center;
        margin: 0 0 10px;
        font-weight: 600;
        font-size: 30px;
        line-height: 1.2em;
    }
`;

export const Form = styled.form`
     
    .socials {
        display: flex;
        justify-content : center;
        margin-bottom : 20px;
    }
    
    .socials div{
        
        margin : 5px;
        
    }
    .socials img{
        height : 30px;
        width : 30px;
        border-radius : 50%;
        margin: auto;
         display: block;
       
    }

    .login-email,
    .login-password {
        margin-bottom: 20px;
        height : 52px;
       
        
    }
   
    .login-email {
        width : 452px
    }
    label {
        display: block;
        font-size: 16px;
        line-height: 1.4em;
        margin-bottom: 8px;
    }

    .login-email > input {
        width: 100%;
        font-size: 16px;
        line-height: 16px;
        border: 1px solid #d8d8d8;
        padding: 11px 15px;
        vertical-align: middle;
        max-width: 100%;
        box-sizing: border-box;
    }

    .text-over-input {
        position: relative;
        display: block;
    }
    .text-over-input > input {
        width: 100%;
        font-size: 16px;
        line-height: 16px;
        border: 1px solid #d8d8d8;
        padding: 11px 15px;
        vertical-align: middle;
        max-width: 100%;
    }

    .forgot-password {
        position: absolute;
        top: 50%;
        right: 20px;
        line-height: 1em;
        margin-top: -0.5em;
        margin-left : -20px;
        font-size: 12.8px;
        transition: color 0.1s, border-color 0.1s;
        text-decoration: none;
        
    }

    .forgot-password:hover {
        cursor: pointer;
        color: red;
        text-decoration: underline;
        background-color: transparent;
    }

    input:focus {
        border-color: #000;
    }

    .action-bottom {
        margin-top: 27px;
        width : 452px;
        height : 52px
    }

    .action-bottom > p {
        margin-bottom: 1em;
        font-weight: 500;
    
        margin-block-start: 1em;
        margin-block-end: 1em;
    }

    .action-bottom > p > input {
        font-weight: 700;
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 5px;
        background: red;
        border: 1px solid red;
        font-size: 16px;
        line-height: 1em;
        height: auto;
        margin: 0;
        padding: 11px 25px;
        vertical-align: middle;
        text-align: center;
        color: white;
        transition: background-color 0.1s, color 0.1s, border-color 0.1s,
            opacity 0.1s;
        display: inline-block;
    }

    .action-bottom > span {
        margin: 10px 0;
        display: block;
        transition: color 0.1s, border-color 0.1s;
    }
`;