import React from 'react';
import { Input } from 'antd';

const TextInput = ({ label, value, onChange }) => {
	return (
		<div className="input-container">
			<label>{label}</label>
			<Input value={value} onChange={onChange} />
		</div>
	);
};

export default TextInput;
