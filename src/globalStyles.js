import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}
:root {
    --pink: pink;
    --playfair: 'Playfair Display', serif;
    --poppins: 'Poppins', sans-serif;
    --roboto: 'Roboto', sans-serif;
}
html, body {
    background-color: #EFEFEF;
}
a {
text-decoration: none;
}
`;
