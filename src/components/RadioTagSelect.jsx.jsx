import React from 'react';
import { Form, Radio, Tag } from 'antd';
import StyledLabel from './StyledLabel';

const RadioTagSelect = ({ label, value, onChange, options }) => {
	return (
		<Form.Item label={<StyledLabel>{label}</StyledLabel>} name="medications">
			<Radio.Group onChange={onChange} value={value}>
				{options.map(option => (
					<Tag key={option.value} value={option.value}>
						{option.label}
					</Tag>
				))}
			</Radio.Group>
		</Form.Item>
	);
};

export default RadioTagSelect;
