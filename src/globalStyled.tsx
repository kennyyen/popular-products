/**
 * @file General Global styling
 * @author Kenny Yen
 */
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     body {
        transition: background 0.2s ease-in, color 0.2s ease-in;
     }
     p {
         color: grey;
     }
     input[type=number]::-webkit-inner-spin-button,
     input[type=number]::-webkit-outer-spin-button {
         -webkit-appearance: none;
          margin: 0;
          -moz-appearance: textfield;
     }
 `;

export default GlobalStyle;
