import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Redirect, Route, Switch} from "react-router-dom";
import LoginPage from "../screens/auth/loginPage";
import RegisterPage from "../screens/auth/registerPage";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://ikbalwb.com/">
                https://ikbalwb.com/
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function AuthLayout() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[50]
                            : theme.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Switch>
                    <Route exact path='/auth/login'>
                        <LoginPage/>
                    </Route>
                    <Route exact path='/auth/register'>
                        <RegisterPage/>
                    </Route>
                    <Redirect to='/auth/login'>
                        <LoginPage/>
                    </Redirect>
                </Switch>
                <Copyright sx={{ mt: 5 }} />
            </Grid>
        </Grid>
    );
}