import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import RegistrationForm from "./views/Registration/RegistrationForm";
import "./styles/styles.scss";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RegistrationForm />
        </ThemeProvider>
    );
}

export default App;
