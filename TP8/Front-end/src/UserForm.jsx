import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';
import { login } from './UserAPI.js';
import { useNavigate } from 'react-router-dom';

function UserForm(setUser, user) {

    const [isLoading, setIsLoading] = React.useState(false);
    const [userEmail, setUserEmail] = React.useState("");
    const [userPassword, setUserPassword] = React.useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const userData = await login(userEmail, userPassword);
        setIsLoading(false);
        navigate('/course');
        
    }

    // useEffect(() => {
    //     if(localStorage.getItem('accessToken')) {
    //         navigate('/course')
    //     }
    // })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="email" 
                    variant="outlined" 
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <TextField 
                    label="password" 
                    variant="outlined" 
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
                <Button variant="contained" type="submit" endIcon={<FaSearch />}>Search</Button>
                </form>
                {isLoading && <CircularProgress />}
            </div>
    )
}

export default UserForm

// olivier@mail.com
// bestPassw0rd