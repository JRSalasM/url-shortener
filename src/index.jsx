import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from "@chakra-ui/core"
import App from "./App";

ReactDOM.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <ColorModeProvider>
                <CSSReset />
                <App />
            </ColorModeProvider>
        </ThemeProvider>
    </StrictMode>,
    document.getElementById("root"));
