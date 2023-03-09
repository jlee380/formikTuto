import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import FormikControl from "./FormikControl";

function Login() {
	const options = [
		{ key: "Email", value: "emailomc" },
		{ key: "Telephone", value: "telephonemoc" },
	];
	const initialValues = {
		email: "",
		password: "",
		confirmPassword: "",
		madOfContact: "",
		phone: "",
	};

	const validationSchema = Yup.object({
		email: Yup.string().email("Invaild email format").required("required"),
		password: Yup.string().required("required"),
		confirmPassword: Yup.string().oneOf([
			Yup.ref("password"),
			"",
			"password much match",
		]),
		madeOfContact: Yup.string().required("required"),
		phone: Yup.string().when("modeOfContact", {
			is: "telephonemoc",
			then: Yup.string().required("required"),
		}),
	});

	function onSubmit(values) {
		console.log("submitted", values);
	}

	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}>
				{(formik) => {
					return (
						<Form>
							{console.log("formik", formik)}
							<h2>Registration Form</h2>
							<FormikControl
								control="input"
								type="email"
								label="Email"
								name="email"
							/>
							{console.log("formik error", formik.errors)}
							<FormikControl
								control="input"
								type="password"
								label="Password"
								name="password"
							/>
							<FormikControl
								control="input"
								type="password"
								label="Confirm Password"
								name="confirmPassword"
							/>
							<FormikControl
								control="radio"
								type="Mode of contact"
								label="Mode of contact"
								name="modeOfContact"
								options={options}
							/>
							<FormikControl
								control="input"
								type="text"
								label="Phone number"
								name="phone"
							/>
							<button type="submit" disalbed={!formik.isValid}>
								Submit
							</button>
						</Form>
					);
				}}
			</Formik>
		</>
	);
}

export default Login;
