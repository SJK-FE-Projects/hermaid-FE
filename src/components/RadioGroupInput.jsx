import React from 'react';
import { Radio } from 'antd';

const RadioGroupInput = ({ label, options, value, onChange }) => {
	return (
		<div className="input-container">
			<label>{label}</label>
			<Radio.Group onChange={onChange} value={value}>
				{options.map(option => (
					<Radio key={option.value} value={option.value}>
						{option.label}
					</Radio>
				))}
			</Radio.Group>
		</div>
	);
};

export default RadioGroupInput;
