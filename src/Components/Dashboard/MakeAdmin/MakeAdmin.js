import React, { useState } from 'react';
import { Button, TextField, Alert } from '@mui/material';
const MakeAdmin = () => {


    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://damp-dusk-29893.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex  flex-column w-50 text-center border mt-5 p-5 makeup-bg">
                <div className="w-100">
                    <h2 className="text-light pb-5">Make An Admin</h2>

                    <form onSubmit={handleAdminSubmit}>
                        <TextField
                            sx={{ width: '70%' }}
                            label="Email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <br />
                        <Button type="submit" className="bg-light text-dark mt-5 py-1 px-4">Make Admin</Button>
                    </form>
                    {success && <Alert severity="success">Made Admin Successfully!</Alert>}
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;