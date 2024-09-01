import React from 'react';
import { Radio } from 'antd';

const RatingScaleInput = ({ label, value, onChange }) => {
	const options = [0, 1, 2, 3, 4];

	return (
		<div className="input-container">
			<label>{label}</label>
			<Radio.Group onChange={onChange} value={value}>
				{options.map(option => (
					<Radio key={option} value={option}>
						{option}
					</Radio>
				))}
			</Radio.Group>
		</div>
	);
};

export default RatingScaleInput;
