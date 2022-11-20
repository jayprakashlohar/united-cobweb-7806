import React, { useState } from "react";
import { Button } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Optstyle = styled.div`
  .mainbody {
    font-family: sans-serif;
    line-height: 2;
    letter-spacing: 1.5;

    background-repeat: no-repeat;
    background-size: cover;
    color: black;
    height: 600px;
  }
  .payment-sec {
    width: 20%;
    border: 2px solid grey;
    margin: auto;
    margin-top: 200px;
    box-sizing: border-box;
    padding: 25px;
    border-radius: 4px;
  }

  .payment-sec > h2 {
    margin: 0;
    text-align: center;
    font-weight: bold;
  }

  .option-sec {
    display: grid;

    columns: 200px;
  }
  .option-sec > p {
    text-align: left;
    margin: 0;
    margin-top: 10px;
    margin-left: 3px;
    margin-bottom: 10px;
    color: black;
    text-align: center;
  }

  /* .option-sec > p:nth-child(2) {  
    color: black;  
    margin: 0;  
  }  */

  .otp {
    margin-top: 10px;
    margin-bottom: 25px;
    height: 35px;
    border: 2px solid black;
    border-radius: 4px;
    padding-left: 10px;
    width: 92%;
  }

  .placeOrder {
    margin-top: 0px;

    height: 35px;
    margin-bottom: 17px;
    background-color: #f5d891;
    border: 2px solid black;
    border-radius: 4px;
  }

  .button-sec {
    font-size: 1em;
    padding: 10px;
    color: black;
    border: 2px solid black;
    border-radius: 10px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-out;
    text-align: center;
    margin-top: 5px;
  }
  .button-sec:hover {
    color: white;
    background-color: #2241ac;
  }
`;
export const Otp = () => {
  const [show, setshow] = useState(false);
  const handleshow = () => {
    setshow(true);
  };

  const handlehide = () => {
    setshow(false);
  };

  return (
    <Optstyle>
      <div className="mainbody">
        <div className="payment-sec">
          <h2>OTP Verificaion</h2>
          <hr />
          <form className="option-sec">
            <p>An OTP has been sent to ****00</p>
            <p>Do not leave the page</p>
            <input type="number" className="otp" placeholder="Enter OTP" />
            <Link to="" className="button-sec" onClick={handleshow}>
              Submit
            </Link>
            <Link to="/" className="button-sec">
              Home
            </Link>
          </form>{" "}
        </div>

        <Dialog
          show={show}
          onide={handlehide}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <h1>
              <Alert severity="success">
                {" "}
                <h1>Payment Successfull — Thanks for shopping !</h1>
              </Alert>
            </h1>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your order is confirmed. You will receive an order confirmation
              email/SMS shortly with the expected delivery date for your items.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handlehide}>Continue</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Optstyle>
  );
};
