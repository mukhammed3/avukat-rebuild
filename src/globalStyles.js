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
    --trans: all 0.2s ease-in-out;

}
html, body {
    background-color: #EFEFEF;
    height: 100%;
}
a {
text-decoration: none;
}
div,p,h1,h2,h3,h4,h5,h6,span {
    margin: 0;
    padding: 0;
}
a:hover {
    color: inherit;
}
a {
    color: inherit;
}
`;
