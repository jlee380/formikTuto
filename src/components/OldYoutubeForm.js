import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
	name: "",
	email: "",
	channel: "",
};

const onSubmit = (values) => {
	console.log(values);
};

const validate = (values) => {
	let errors = {};

	if (!values.name) {
		errors.name = "Required";
	}

	if (!values.email) {
		errors.email = "Required";
	}

	if (!values.channel) {
		errors.channel = "Required";
	}

	return errors;
};

const validationSchema = Yup.object({
	name: Yup.string().required("Required!"),
	email: Yup.string().email("Invaild email format").required("Required"),
	channel: Yup.string().required("Required"),
});

function OldYoutubeForm() {
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	console.log("visited", formik.touched);
	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						onChange={formik.handleChange}
						value={formik.values.name}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.name && formik.errors.name && (
						<div className="error">{formik.errors.name}</div>
					)}
				</div>

				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						onChange={formik.handleChange}
						value={formik.values.email}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.email && formik.errors.email && (
						<div className="error">{formik.errors.email}</div>
					)}
				</div>

				<div className="form-control">
					<label htmlFor="channel">Channel</label>
					<input
						type="text"
						id="channel"
						name="channel"
						placeholder="YouTube channel name"
						onChange={formik.handleChange}
						value={formik.values.channel}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.channel && formik.errors.channel && (
						<div className="error">{formik.errors.channel}</div>
					)}
				</div>

				<button type="submit">submit</button>
			</form>
		</>
	);
}

export default OldYoutubeForm;
