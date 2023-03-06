import { useFormik } from "formik";
import React from "react";

function YoutubeForm() {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			channel: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	// console.log("values", formik.values);
	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					onChange={formik.handleChange}
					value={formik.values.name}
				/>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>

				<label htmlFor="channel">Channel</label>
				<input
					type="text"
					id="channel"
					name="channel"
					placeholder="YouTube channel name"
					onChange={formik.handleChange}
					value={formik.values.channel}
				/>

				<button type="submit">submit</button>
			</form>
		</>
	);
}

export default YoutubeForm;
