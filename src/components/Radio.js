import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Radio(props) {
	const { label, name, options, ...rest } = props;
	return (
		<div className="form-control">
			<lable>{label}</lable>
			<Field name={name} {...rest}>
				{({ field }) => {
					console.log("field", field);
					return options.map((option) => {
						return (
							<React.Fragment key={option.key}>
								<input
									{...field}
									type="radio"
									id={option.value}
									value={option.value}
									checked={field.value === option.value}
								/>
								<label htmlFor={name}>{option.key}</label>
							</React.Fragment>
						);
					});
				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default Radio;
