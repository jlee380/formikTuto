import React from "react";
import Input from "./Input";
import Radio from "./Radio";

function FormikControl(props) {
	const { control, ...rest } = props;
	switch (control) {
		case "input":
			return <Input {...rest} />;
		case "radio":
			return <Radio {...rest} />;
		default:
			return null;
	}
}

export default FormikControl;
