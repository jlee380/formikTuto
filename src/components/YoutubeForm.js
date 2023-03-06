import React from "react";

function YoutubeForm() {
	return (
		<>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" name="name" />

			<label htmlFor="email">Email</label>
			<input type="email" id="email" name="email" />

			<label htmlFor="channel">Channel</label>
			<input
				type="text"
				id="channel"
				name="channel"
				placeholder="YouTube channel name"
			/>

			<button>submit</button>
		</>
	);
}

export default YoutubeForm;
