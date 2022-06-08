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
	firstName: string;
	lastName: string;
	password: string;
};

export const Register: React.FC<props> = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<formFields>({
		defaultValues: {
			username: "",
			firstName: "",
			lastName: "",
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
					<Title>Register</Title>
					<InputWrapper invalid={!!errors.username}>
						<div className="title">Your username</div>
						<Input
							invalid={!!errors.username}
							{...register("username")}
						/>
						<Error>{errors.username?.message}</Error>
					</InputWrapper>

					<InputWrapper invalid={!!errors.firstName}>
						<div className="title">First name</div>
						<Input
							invalid={!!errors.firstName}
							{...register("firstName")}
						/>
						<Error>{errors.firstName?.message}</Error>
					</InputWrapper>

					<InputWrapper invalid={!!errors.lastName}>
						<div className="title">Last name</div>
						<Input
							invalid={!!errors.lastName}
							{...register("lastName")}
						/>
						<Error>{errors.lastName?.message}</Error>
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
				</Form>
				<LinkTo>
					Have an account?
					<Link to={"/login"}>Sign in</Link>
				</LinkTo>
			</main>

			<Footer>©️ITSA, 2022</Footer>
		</LoginLayout>
	);
};

function validateFields(values: formFields): ResolverResult {
	const { password, username, firstName, lastName } = values;
	const errors: any = {};

	if (!username) {
		errors.username = { message: "This field is required" };
	} else if (username.length <= 3) {
		errors.username = { message: "Username is too small" };
	}

	if (!password) {
		errors.password = { message: "This field is required" };
	} else if (password.length <= 3) {
		errors.password = { message: "Password is too small" };
	}

	if (!lastName) {
		errors.lastName = { message: "This field is required" };
	} else if (lastName.length <= 3) {
		errors.lastName = { message: "Last name is too small" };
	}

	if (!firstName) {
		errors.firstName = { message: "This field is required" };
	} else if (firstName.length <= 3) {
		errors.firstName = { message: "First name is too small" };
	}

	return {
		errors,
		values,
	};
}
