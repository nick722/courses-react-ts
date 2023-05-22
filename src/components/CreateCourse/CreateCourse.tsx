import React from 'react';
import Input from '../common/Input/Input';

const CreateCourse = () => {
	return (
		<div>
			<h2>CreateCourse component </h2>
			Title <Input labelText={} placeholderText={} onChange={} />
			<div>Description (textarea)</div>
			<div>List of authors</div>
			<div>
				Course authors - contains a list of authors course and their
				corresponding Delete author buttons
			</div>
			<div>Create author </div>
		</div>
	);
};

export default CreateCourse;
