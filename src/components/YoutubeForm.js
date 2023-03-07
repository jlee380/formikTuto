import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
	name: "abc",
	email: "",
	channel: "",
	comments: "",
	address: "",
	social: {
		facebook: "",
		twitter: "",
	},
	phoneNumbers: ["", ""],
	phNumbers: [""],
};

const savedValues = {
	name: "123",
	email: "123@gmail.com",
	channel: "123",
	comments: "123",
	address: "123",
	social: {
		facebook: "",
		twitter: "",
	},
	phoneNumbers: ["", ""],
	phNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
	console.log(values);
	console.log("submit succeed", onSubmitProps);
	onSubmitProps.setSubmitting(false);
	onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
	name: Yup.string().required("Required!"),
	email: Yup.string().email("Invaild email format").required("Required"),
	channel: Yup.string().required("Required"),
});

const validateComments = (value) => {
	let error;
	if (!value) {
		error = "required";
	}
	return error;
};

function YoutubeForm() {
	const [formValues, setFormValues] = useState(null);
	return (
		<Formik
			initialValues={formValues || initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			enableReinitialize
			// validateOnMount
		>
			{(formik) => {
				console.log("formik props", formik);
				return (
					<Form>
						<div className="form-control">
							<label htmlFor="name">Name</label>
							<Field type="text" id="name" name="name" />
							<ErrorMessage name="name" component={TextError} />
						</div>

						<div className="form-control">
							<label htmlFor="email">Email</label>
							<Field type="email" id="email" name="email" />
							<ErrorMessage name="email">
								{(errorMsg) => {
									<div className="error">{errorMsg}</div>;
								}}
							</ErrorMessage>
						</div>

						<div className="form-control">
							<label htmlFor="channel">Channel</label>
							<Field
								type="text"
								id="channel"
								name="channel"
								placeholder="YouTube channel name"
							/>
							<ErrorMessage name="channel" />
						</div>

						<div className="form-control">
							<label htmlFor="comments">Comments</label>
							<Field
								as="textarea"
								id="comments"
								name="comments"
								validate={validateComments}
							/>
							<ErrorMessage
								name="comments"
								component={TextError}
							/>
						</div>

						<div className="form-control">
							<label htmlFor="address">address</label>
							<Field name="address">
								{(props) => {
									const { field, form, meta } = props;
									// console.log("render props", props);
									return (
										<div>
											<input
												type="text"
												id="address"
												{...field}
											/>
											{meta.touched && meta.error && (
												<div>{meta.error}</div>
											)}
										</div>
									);
								}}
							</Field>
						</div>

						<div className="form-control">
							<label htmlFor="facebook">facebook profile</label>
							<Field
								type="text"
								id="facebook"
								name="social.facebook"
							/>
						</div>

						<div className="form-control">
							<label htmlFor="twitter">twitter profile</label>
							<Field
								type="text"
								id="twitter"
								name="social.twitter"
							/>
						</div>

						<div className="form-control">
							<label htmlFor="primaryPh">
								Primary phone number
							</label>
							<Field
								type="text"
								id="primaryPh"
								name="phoneNumbers[0]"
							/>
						</div>

						<div className="form-control">
							<label htmlFor="secondaryPh">
								Secondary phone number
							</label>
							<Field
								type="text"
								id="secondaryPh"
								name="phoneNumbers[1]"
							/>
						</div>

						<div className="form-control">
							<label>List of phone numbers</label>
							<FieldArray name="phNumbers">
								{(fieldArrayProps) => {
									// console.log("fieldArrayProps", fieldArrayProps);
									const { push, remove, form } =
										fieldArrayProps;
									const { values } = form;
									const { phNumbers } = values;
									return (
										<div>
											{phNumbers.map((phNumber, i) => (
												<div key={i}>
													<Field
														name={`phNumbers[${i}]`}
													/>
													<button
														type="button"
														onClick={() =>
															remove(i)
														}
														disabled={
															i < 1 ? true : false
														}>
														-
													</button>
													<button
														type="button"
														onClick={() =>
															push("")
														}>
														+
													</button>
												</div>
											))}
										</div>
									);
								}}
							</FieldArray>
						</div>
						{/* <button
							type="button"
							onClick={() => formik.validateField("comments")}>
							Validate comments
						</button>
						<button
							type="button"
							onClick={() => formik.validateForm()}>
							Validate all
						</button>

						<button
							type="button"
							onClick={() => formik.setFieldTouched("comments")}>
							Visit comments
						</button>
						<button
							type="button"
							onClick={() =>
								formik.setTouched({
									name: true,
									email: true,
									channel: true,
									comments: true,
								})
							}>
							Visit field
						</button> */}

						<button
							type="button"
							onClick={() => setFormValues(savedValues)}>
							saved values
						</button>

						<button
							type="reset"
							onClick={() => setFormValues(initialValues)}>
							reset
						</button>

						<button
							type="submit"
							disabled={!formik.isValid || formik.isSubmitting}>
							submit
						</button>
					</Form>
				);
			}}
		</Formik>
	);
}

export default YoutubeForm;
