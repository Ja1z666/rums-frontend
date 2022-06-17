import React from "react";
import { ResolverResult, useForm } from "react-hook-form";
import Link from 'next/link'
import {
	Button,
	Error,
	Footer,
	Form,
	Input,
	InputWrapper,
	LoginLayout,
	Title,
} from "../styles";
import { GlobalStyles } from "../styles/globalStyles";
import client from "./api/apollo-client";
import { gql } from "@apollo/client";

interface props {}

type formFields = {
	username: string;
	password: string;
};

const Login: React.FC<props> = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<formFields>({
		defaultValues: {
			username: "",
			password: "",
		},
		mode: "onBlur",
		reValidateMode: "onBlur",
		resolver: validateFields,
	});

	const login = async (userFields:formFields) => {
		const LOGIN = gql`
			mutation login{
				login(options: {username: "${userFields.username}", password: "${userFields.password}"}){
					data{
						id
					}
					errors{
						field
						message
    				}
				}
			}
		`;
		const { data } = await client.mutate({
			mutation: LOGIN,
		});

		if(!data.login.data){
			console.log(data.login.errors[0]);
		}else{
			console.log(data.login);
		}
	}

	return (
		<LoginLayout>
			<GlobalStyles />
			<main>
				<Form
					onSubmit={handleSubmit((e) => {
						login({username: e.username, password: e.password});
					})}
				>
					<Title>Login</Title>
					<InputWrapper invalid={!!errors.username}>
						<div className="title">Your username</div>
						<Input
							invalid={!!errors.username}
							{...register("username")}
						/>
						<Error>{errors.username?.message}</Error>
					</InputWrapper>

					<InputWrapper invalid={!!errors.password}>
						<div className="title">Password</div>
						<Input
							type={"password"}
							invalid={!!errors.password}
							{...register("password")}
						/>
						<Error>{errors.password?.message}</Error>
					</InputWrapper>

					<Button>Continue</Button>

					<Link href="/forgot-password">Forgot your password?</Link>
				</Form>
			</main>

			<Footer>©️ITSA, 2022</Footer>
		</LoginLayout>
	);
}

export default Login;

function validateFields(values: formFields): ResolverResult {
	const { password, username } = values;
	const errors: any = {};

	if (!username) {
		errors.username = { message: "This field is required" };
	} else if (username.length <= 3) {
		errors.username = { message: "username is too small" };
	}

	if (!password) {
		errors.password = { message: "This field is required" };
	} else if (password.length <= 3) {
		errors.password = { message: "password is too small" };
	}

	return {
		errors,
		values,
	};
}

// export async function getServerSideProps() {
//     try{
//         const { data } = await client.query({
//             query: gql`
//                 query me {
//                     me{
//                         id
//                     }
//                 }
//             `,
//         });
//         return {
//             redirect: {
//               destination: '/',
//               permanent: false,
//             },
//         }
//     }catch(e){
//         return {
//             props: {}
//         }
//     }
// }