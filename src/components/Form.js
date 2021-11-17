import React, { useState } from "react";
import SignupForm from "./SignupForm";
import SignupformSuccess from "./SignupformSuccess";

const form = () => {
	const [FormIsSubmitted, setFormIsSubmitted] = useState(false);
	const submitForm = () => {
		setFormIsSubmitted(true);
	};
	return (
		<div>
			{!FormIsSubmitted ? (
				<SignupForm submitForm={submitForm} />
			) : (
				<SignupformSuccess />
			)}
		</div>
	);
};

export default form;
