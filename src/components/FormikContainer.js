import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
	const dropdownOptions = [
		{ key: "Select an option", value: "" },
		{ key: "option1", value: "option1" },
		{ key: "option2", value: "option2" },
		{ key: "option3", value: "option3" },
	];
	const radioOptions = [
		{ key: "option1", value: "option1" },
		{ key: "option2", value: "option2" },
		{ key: "option3", value: "option3" },
	];

	const checkboxOptions = [
		{ key: "option1", value: "coption1" },
		{ key: "option2", value: "coption2" },
		{ key: "option3", value: "coption3" },
	];

	const initialValues = {
		email: "",
		description: "",
		selectOption: "",
		radioOption: "",
		checkboxOption: [],
		birthDate: null,
	};
	const validationSchema = Yup.object.shape({
		email: Yup.string().required("Required"),
		description: Yup.string().required("Required"),
		selectOption: Yup.string().required("Required"),
		radioOption: Yup.string().required("Required"),
		checkboxOption: Yup.array().min(1, "Required"),
		birthDate: Yup.date().nullable().required("Required"),
	});
	const onSubmit = (values) => console.log("Form data", values);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{(formik) => (
				<Form>
					<FormikControl
						control="input"
						type="email"
						label="Email"
						name="email"
					/>
					{console.log(formik.errors)}
					<FormikControl
						control="textarea"
						label="Description"
						name="description"
					/>
					<FormikControl
						control="select"
						label="Select a topic"
						name="selectOption"
						options={dropdownOptions}
					/>
					<FormikControl
						control="radio"
						label="Select an option"
						name="radioOption"
						options={radioOptions}
					/>
					<FormikControl
						control="checkbox"
						label="Select an option"
						name="checkboxOption"
						options={checkboxOptions}
					/>
					<FormikControl
						control="date"
						label="Pick a date"
						name="birthDate"
					/>
					<button type="submit">submit</button>
				</Form>
			)}
		</Formik>
	);
}

export default FormikContainer;
