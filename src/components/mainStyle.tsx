import styled from "styled-components";
import { Colors, Fonts } from "./globalStyles";

export const MainLayout = styled.div`
	min-height: 100vh;
	font-family: ${Fonts.poppins};
	background-color: ${Colors.bg};
	color: ${Colors.txt};
`;

export const NavBar = styled.div`
    max-width: 1800px;
    margin: 0 auto;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > h1{
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
    }

    & > .info{
        display: flex;
        align-items: center;
    }

    & > .info p{
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
    }

    & > .info button{
        margin-left: 20px;
        padding: 0;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;

export const Container = styled.div`
    max-width: 1700px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 0 30px;

    & > h2{
        font-weight: 500;
        font-size: 54px;
        line-height: 81px;
        color: ${Colors.lightPurple};
    }
    
    & > p{
        margin-top: 20px;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: ${Colors.darkGray}
    }
`;

export const Search = styled.div`
    margin-top: 50px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    max-width: 400px;
    padding: 3px 15px;
    border: 1px solid ${Colors.darkGray};
    border-radius: 20px;
    
    & > input, input::placeholder{
        margin-left: 10px;
        border: 0px;
        background-color: transparent;
        font-weight: 400;
        width: 330px;
        font-size: 16px;
        line-height: 27px;
        outline: none;
        color: ${Colors.darkGray};
    }
`;

export const Line = styled.div`
    border: 1px solid ${Colors.silver};
`;

export const Table = styled.div`
    & > .title{
        background-color: ${Colors.txt};
        height: 50px;
        display: flex;
        align-items: center;
    }
    
    & > .title p{
        font-weight: 500;
        margin-left: 60px;
        font-size: 16px;
        line-height: 24px;
        color: ${Colors.white};
    }
`;