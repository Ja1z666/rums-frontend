import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export const Colors = {
	bg: "#F8FAFC",
	white: "white",
	txt: "#333333",
	gradientBtn: "linear-gradient(180deg, #625BF7 0%, #463EEA 100%)",
	lightPurple: "#625BF7",
	DarkPurple: "#463EEA",
	silver: "#DEDEDE",
	darkGray: "#424242",
	red: "#E41E1E",
};

export const Fonts = {
	mulish: "'Mulish', sans-serif",
	poppins: "'Poppins', sans-serif"
};
