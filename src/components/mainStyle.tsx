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
        border: none;
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
    border-bottom: 1px solid ${Colors.silver};
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
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        width: 120px;
        color: ${Colors.white};
    }
`;

export const UserItemStyle = styled.button`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: ${Colors.white};
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.05);
    padding: 16px 0px;
    margin-top: 14px;
    border: none;
    cursor: pointer;

    & > p{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        width: 120px;
    }
`;

export const UserSubInfo = styled.div`
    display: flex;
    padding-left: 15px;

    & > ul{
        margin-top: 14px;
        list-style-type: none;
        margin-right: 140px;
    }

    & > ul li{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 22px;
    }

    & > ul li:first-child{
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 26px;
    }
`;

export const DownloadButton = styled.button`
    display: flex;
    align-items: flex-start;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-top: 20px;

    & > p{
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-left: 3px;
        color: ${Colors.lightPurple};
    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
`;