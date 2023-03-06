import { useFormik } from "formik";
import React from "react";

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

function YoutubeForm() {
	const formik = useFormik({
		initialValues,
		onSubmit,
		validate,
	});

	// console.log("error", formik.errors) ;
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
					/>
					{formik.errors.name && (
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
					/>
					{formik.errors.email && (
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
					/>
					{formik.errors.channel && (
						<div className="error">{formik.errors.channel}</div>
					)}
				</div>

				<button type="submit">submit</button>
			</form>
		</>
	);
}

export default YoutubeForm;
