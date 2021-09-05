import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {useHistory} from "react-router-dom";
import {MenuItem, Select} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {loginAsync, registerAsync} from "../../../store/reducers/user/user.thunk";
import {useState} from "react";
import Swal from "sweetalert2";


export default function RegisterPage() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        name: false,
    })
    const {isLoading, user, errorMessage} = useSelector((state) => state.users);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        if (data.get('password') === data.get('confPassword')
            && data.get('name') === ''
            && (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(data.get('email').toString()))) {
            dispatch(registerAsync(
                {
                    email: data.get('email'),
                    password: data.get('password'),
                    fullName: data.get('name'),
                    address: data.get('address'),
                }
            ))
            if(!isLoading){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your registration has been saved',
                    showConfirmButton: false,
                    timer: 1500
                }).then(value => {
                    console.log(user)
                    console.log(value)
                    history.push('/auth/login')
                })
            }
        } else {
            setErrors(
                {
                    email: !(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(data.get('email').toString())),
                    password: data.get('password').toString() === data.get('confPassword').toString(),
                    name: data.get('name') === ''
                }
            )
        }

    };

    const history = useHistory()


    return (
        <Box
            sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Register
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    error={errors.name}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address "
                    name="address"
                    autoComplete="address"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={errors.email}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error={errors.password}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confPassword"
                    label="Confirme Password"
                    type="password"
                    id="confPassword"
                    autoComplete="current-password"
                    error={errors.password}
                />

                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>

                    </Grid>
                    <Grid item>
                        <Link onClick={(e) => {
                            e.preventDefault();
                            history.push('/auth/login')
                        }} href="#" variant="body2">
                            {"Already have an account? Sign In"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}