// DatePicker.js
import React from 'react';
import { DatePicker as AntDatePicker, Space } from 'antd';

const DatePicker = ({ label, onChange }) => (
	<Space direction="vertical">
		<label>{label}</label>
		<AntDatePicker onChange={onChange} />
	</Space>
);

export default DatePicker;
