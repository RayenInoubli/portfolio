import React from 'react';
import { Typography } from '@mui/material';
import { useState } from "react";
import { TextField, Button } from "@mui/material";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      //
    };

    return (
        <main id='contact'>
            <div id='contact-container'>
                <Typography variant='h1' sx={{ fontSize: "36px", 
                    fontWeight: "bold", 
                    borderBottom: "2px solid #ddd", 
                    width: "fit-content", 
                    paddingBottom: "1rem" 
                }}> Shoot me an email. ✉️🚀 </Typography>
                <div id='contact-form'>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                            type="email"
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            margin="normal"
                            required
                            multiline
                            rows={4}
                        />
                        <Button
                            fullWidth
                            type="submit"
                            sx={{
                                mt: 2,
                                backgroundColor: "#000",
                                color: "#fff",
                                fontWeight: "bold",
                                height: "3rem",
                                "&:hover": {
                                    backgroundColor: "#ffffff",
                                    color: "#000",
                                    border: "1px solid #000",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Contact;
