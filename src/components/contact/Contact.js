
import React, { useState } from 'react';
import './contact.sass';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from '@mui/material/TextField';
import img from '../../assets/contact.png';

export default function Contact() {

    const [contact, setContact] = useState({});

    function onChangeHandler(event) {
        setContact({ ...contact, [event.target.name]: event.target.value });
        return;
    };

    function handleSubmit(event) {
        event.preventDefault();
        const params = {
            name: contact?.name,
            lastName: contact?.lastName,
            email: contact?.email,
            consult: contact?.consult,
        };

        emailjs.send(
            process.env.REACT_APP_EMAIL_SERVICE,
            process.env.REACT_APP_EMAIL_INVOICES_TODAY_TEMPLATE,
            params,
            process.env.REACT_APP_EMAIL_KEY)
            .then(function () {
                window.location.replace('/home')
            }, function (err) {
                window.location.replace('/error')
            });
    }

    return (
        <div className="contact-container">
            <div className="contact-container-left">
                <img className="contact-container-left-img" src={img} />
            </div>
            <div className="contact-container-right">
                <div>
                    <h2>Enviar consulta </h2>
                </div>
                <Form className="contact-container-form" onSubmit={(event) => handleSubmit(event)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FormControl className="contact-container-form-input" fullWidth sx={{ m: 1 }} required={true}>
                            <InputLabel htmlFor="outlined-adornment-amount">Nombre</InputLabel>
                            <OutlinedInput
                                id="1"
                                name="name"
                                placeholder="Nombre"
                                onChange={(event) => onChangeHandler(event)}
                                label="Nombre"
                                type="text"
                            />
                        </FormControl>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FormControl className="contact-container-form-input" fullWidth sx={{ m: 1 }} required={true}>
                            <InputLabel htmlFor="outlined-adornment-amount">Apellido</InputLabel>
                            <OutlinedInput
                                id="1"
                                name="lastName"
                                placeholder="Apellido"
                                onChange={(event) => onChangeHandler(event)}
                                label="Apellido"
                                type="text"
                            />
                        </FormControl>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FormControl className="contact-container-form-input" fullWidth sx={{ m: 1 }} required={true}>
                            <InputLabel htmlFor="outlined-adornment-amount">Correo</InputLabel>
                            <OutlinedInput
                                id="1"
                                name="email"
                                placeholder="Correo"
                                onChange={(event) => onChangeHandler(event)}
                                label="Correo"
                                type="text"
                            />
                        </FormControl>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FormControl className="contact-container-form-input" fullWidth sx={{ m: 1 }} required={true}>
                            <TextField htmlFor="outlined-adornment-amount"
                                multiline
                                rows={5}
                                rowsMax={10}
                                id="1"
                                name="consult"
                                placeholder="Consulta"
                                onChange={(event) => onChangeHandler(event)}
                                label="Consulta"
                                type="text"
                            >Consulta</TextField>
                        </FormControl>
                    </Form.Group>
                    <Button className="contact-container-button" variant="contained" size="large" color="success"
                        onClick={(event) => handleSubmit(event)}>
                        Enviar
                    </Button>
                </Form>
            </div>
        </div >
    );
}

