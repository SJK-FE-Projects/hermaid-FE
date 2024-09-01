import React, { useState } from 'react';
import { Form, Input, Radio, Button, DatePicker, Select } from 'antd';

const { Option } = Select;

const StepOne = ({ onNext }) => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log('Step 1 Values:', values);
		onNext();
	};

	return (
		<Form layout="vertical" form={form} onFinish={onFinish}>
			<Form.Item label="Gewicht (kg)" name="weight">
				<Input />
			</Form.Item>

			<Form.Item label="Größe (cm)" name="height">
				<Input />
			</Form.Item>

			<Form.Item label="Hast du einer dieser Erkrankungen?" name="condition">
				<Radio.Group>
					<Radio value="yes">Ja</Radio>
					<Radio value="no">Nein</Radio>
					<Radio value="maybe">Vielleicht</Radio>
				</Radio.Group>
			</Form.Item>

			<Form.Item label="Nimmst du Medikamente ein?" name="medications">
				<Radio.Group>
					<Radio value="yes">Ja</Radio>
					<Radio value="no">Nein</Radio>
				</Radio.Group>
			</Form.Item>

			<Form.Item label="Geburtstag" name="birthday">
				<DatePicker style={{ width: '100%' }} />
			</Form.Item>

			<Form.Item label="Wohnsitz (Land)" name="country">
				<Select>
					<Option value="germany">Deutschland</Option>
					<Option value="austria">Österreich</Option>
					<Option value="switzerland">Schweiz</Option>
				</Select>
			</Form.Item>

			<Form.Item label="Bundesland" name="state">
				<Input />
			</Form.Item>

			<Form.Item label="Stadt" name="city">
				<Input />
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Weiter
				</Button>
			</Form.Item>
		</Form>
	);
};

export default StepOne;
