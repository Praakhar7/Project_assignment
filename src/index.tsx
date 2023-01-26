import * as ReactDOMClient from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";

import App from "./App";
import theme from "./theme";
import {BrowserRouter} from 'react-router-dom'
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <BrowserRouter>
  
    <ChakraProvider resetCSS theme={theme}>
      <App />
    </ChakraProvider>
    </BrowserRouter>
);
