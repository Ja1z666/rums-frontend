import * as React from "react";
import { ResolverResult, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
	Button,
	Error,
	Footer,
	Form,
	Input,
	InputWrapper,
	LinkTo,
	LoginLayout,
	Title,
} from "../components";
import { GlobalStyles } from "../components/globalStyles";

interface props {}

type formFields = {
	username: string;
	password: string;
};

export const Login: React.FC<props> = () => {
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
	return (
		<LoginLayout>
			<GlobalStyles />
			<main>
				<Form
					onSubmit={handleSubmit((e) => {
						alert("success");
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

					<Link to={"/forgot-password"}>Forgot your password?</Link>
				</Form>
				<LinkTo>
					Don’t have an account?
					<Link to={"/register"}>Sign up</Link>
				</LinkTo>
			</main>

			<Footer>©️ITSA, 2022</Footer>
		</LoginLayout>
	);
};

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
