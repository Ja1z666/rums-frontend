import styled from "styled-components";
import { Colors, Fonts } from "./globalStyles";

export const LoginLayout = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-rows: 1fr 80px;
	align-items: center;

	font-family: ${Fonts.mulish};

	background-color: ${Colors.bg};
	padding: 0 36px;
	color: ${Colors.txt};
`;

export const Form = styled.form`
	background-color: ${Colors.white};
	padding: 30px;

	box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
	border-radius: 4px;

	max-width: 444px;
	margin: auto;

	display: grid;
	gap: 20px;

	& > a {
		justify-self: center;

		margin-top: 10px;

		color: #625bf7;
		text-decoration: unset;
		padding-left: 5px;
	}

	@media screen and (max-width: 500px) {
		max-width: 342px;

		margin-top: 2rem;
	}
`;

export const Footer = styled.footer`
	color: rgba(66, 66, 66, 0.5);

	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;

	justify-self: center;
`;

export const Title = styled.div`
	font-style: normal;
	font-weight: 700;
	font-size: 22px;
	line-height: 28px;
	margin-bottom: 10px;
`;

export const InputWrapper = styled.div`
	& > .title {
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 18px;

		${(props: { invalid: boolean }) =>
			props.invalid && `color: ${Colors.red};`}
	}

	display: grid;
	gap: 10px;
`;

export const Error = styled.div`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 18px;
	/* identical to box height */

	color: ${Colors.red};
`;

export const Input = styled.input`
	font-family: "Mulish";

	border: 1px solid #dedede;
	border-radius: 6px;
	background-color: transparent;

	padding: 0px 12px;
	min-height: 45px;

	width: 100%;

	outline-color: ${Colors.lightPurple};

	${(props: { invalid: boolean }) =>
		props.invalid && `border: 1px solid ${Colors.red};`}
`;

export const Button = styled.button`
	background: ${Colors.gradientBtn};
	border-radius: 6px;

	font-family: "Mulish";
	font-style: normal;
	font-weight: 800;
	font-size: 16px;
	line-height: 18px;
	/* identical to box height, or 112% */

	text-transform: uppercase;
	border: inherit;

	color: #ffffff;
	height: 45px;
	padding: 9px 14px;

	margin-top: 10px;

	cursor: pointer;
`;

export const LinkTo = styled.div`
	font-family: "Mulish";
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;

	text-align: center;
	margin-top: 50px;

	& > a {
		color: #625bf7;
		text-decoration: unset;
		padding-left: 5px;
	}
`;
