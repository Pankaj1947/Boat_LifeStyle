import styled from "styled-components";


export const Container = styled.div`
    height: 625px;
    background-color: #141414;;
    color : white !important;
    padding-top: 150px;
    border: 0.1px solid black;
    input {
        background-color : #141414;
        color : white;
        border-radius : 5px;
    }
    .cont {
        max-width: 1280px;
        margin-right: auto;
        margin-left: auto;
        padding-right: 40px;
        padding-left: 40px;
    }

    .cont2 {
        margin-left: auto;
        width: 420px;
        max-width: 100%;
        margin-right: auto;
        margin-top: 30px;
    }

    .heading {
        margin: 10px 0px 40px;
    }

    .heading > h2 {
        text-align: center;
        margin: 0 0 10px;
        line-height: 1.2em;
        font-size: 30px;
        font-weight: 600;
    }
`;

export const Form = styled.form`

    .socials > iframe {
        max-width: 100%;
        width: 100%;
        margin-bottom: 5px;
        border: 0px;
        height: 50px;
        padding-top: 0px;
    }

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


    .input-box,
    .login-password {
        margin-bottom: 20px;
    }

    label {
        display: block;
        font-size: 16px;
        line-height: 1.4em;
        margin-bottom: 8px;
    }

    .input-box > input {
        width: 100%;
        font-size: 16px;
        line-height: 16px;
        border: 1px solid #d8d8d8;
        padding: 11px 15px;
        vertical-align: middle;
        max-width: 100%;
        box-sizing: border-box;
    }

    input:focus {
        border-color: #000;
    }
    .socials img{
        height : 30px;
        width : 30px;
    }
    .action-bottom {
        margin-top: 27px;
    }

    .action-bottom > p {
        margin-bottom: 1em;
        font-weight: 500;
        margin-block-start: 1em;
        margin-block-end: 1em;
    }

    .action-bottom > p > input {
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 5px;
        background-color: red;
        width: 100%;
        border: 1px solid red;
        font-size: 16px;
        font-weight: 700;
        height: auto;
        line-height: 1em;
        margin: 0;
        padding: 11px 25px;
        vertical-align: middle;
        text-align: center;
        display: inline-block;
        color: white;
        transition: background-color 0.1s, color 0.1s, border-color 0.1s,opacity 0.1s;
    }

    .action-bottom > span {
        display: block;
        margin: 10px 0;
        text-align: center;
        text-decoration: none;
        transition: color 0.1s, border-color 0.1s;
        font-size: inherit;
        letter-spacing: 1px;
    }

    .action-bottom > span > a {
        color: var(--black);
    }

    .action-bottom > span > a:hover {
        text-decoration: underline;
        cursor: pointer;
        color: red;
        text-decoration: underline;
        background-color: transparent;
        transition: color 0.1s, border-color 0.1s;
    }
`;