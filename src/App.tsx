import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";
import RegistrationForm from "./views/Registration/RegistrationForm";
import "./styles/styles.scss";
import "./config/i18n";
import {useTranslation} from "react-i18next";


function App() {
    useTranslation(); // necessary for i18n to work
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/*some router will stay here*/}
            <RegistrationForm />
        </ThemeProvider>
    );
}

export default App;
