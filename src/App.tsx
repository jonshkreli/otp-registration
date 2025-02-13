import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";
import RegistrationForm from "./views/Registration/RegistrationForm";
import "./styles/styles.scss";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/*some router will stay here*/}
            <RegistrationForm />
        </ThemeProvider>
    );
}

export default App;
