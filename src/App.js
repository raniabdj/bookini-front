import {BrowserRouter as Router, Switch, Route, useHistory, Redirect} from "react-router-dom";
import AdminLayout from "./ui/layouts/admin";
import AuthLayout from "./ui/layouts/auth";
import {ThemeProvider,createTheme } from "@material-ui/core/styles";
import {purple} from "@material-ui/core/colors";
import {Login} from "@material-ui/icons";
import ClientLayout from "./ui/layouts/client";



function App() {
    const theme = new createTheme (
        {
            palette:{
                mode:'light',
                primary:purple,
                secondary: {main:purple.A200},

            }
        }
    );
    return (
        <div className="App">
            <ThemeProvider theme={theme}>

            <Router history={useHistory()}>
                <Switch>
                    <Route path="/admin" component={AdminLayout}/>
                    <Route path="/auth" component={AuthLayout}/>
                    <Route path="/client" component={ClientLayout}/>
                    <Redirect to="/auth" component={AuthLayout}/>

                </Switch>

            </Router>
            </ThemeProvider>


        </div>
    );
}

export default App;
