import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Select, message, Upload, Row, Col } from 'antd';
import StyledLabel from '../components/StyledLabel';
import RadioInputText from '../components/RadioInputText'; // Import RadioInputText component
import InputWrapper from '../components/InputWrapper';

const { Option } = Select;
const { Dragger } = Upload;

const props = {
	name: 'file',
	multiple: true,
	action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
	onChange(info) {
		const { status } = info.file;
		if (status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (status === 'done') {
			message.success(`${info.file.name} file uploaded successfully.`);
		} else if (status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
	onDrop(e) {
		console.log('Dropped files', e.dataTransfer.files);
	},
};

const StepOne = ({ onNext }) => {
	const [form] = Form.useForm();
	const [medications, setMedications] = useState(''); // State to handle the medication radio input

	const onFinish = (values) => {
		console.log('Step 1 Values:', { ...values, medications }); // Include medications state
		onNext();
	};

	return (
		<Form layout="vertical" form={form} onFinish={onFinish}>


			<Dragger {...props}>
				<Row align="middle" justify="space-between">
					<Col>
						<div style={{ display: 'flex', flexDirection: 'column', justify: 'start', gap: '10px', align: 'start' }}>
							<p className="ant-upload-drag-icon"></p>
							<StyledLabel className="ant-upload-text">Bild hochladen (Optional)</StyledLabel>
							<p className="ant-upload-hint">JPG Format • max. 5MB</p>
						</div>
					</Col>
					<Col>
						<Button type="primary">Primary Button</Button>
					</Col>
				</Row>
			</Dragger>



			<Row gutter={16} style={{ marginTop: '16px' }}>
				<Col span={12}>
					<Form.Item label={<StyledLabel>Gewicht (kg)</StyledLabel>} name="weight">
						<Input />
					</Form.Item>
				</Col>

				<Col span={12}>
					<Form.Item label={<StyledLabel>Größe (cm)</StyledLabel>} name="height">
						<Input />
					</Form.Item>
				</Col>
			</Row>

			<Form.Item label={<StyledLabel>Hast du eine dieser Erkrankungen?</StyledLabel>} name="state">
				<Select>
					<Option value="yes">Ja</Option>
					<Option value="no">Nein</Option>
					<Option value="maybe">Vielleicht</Option>
				</Select>
			</Form.Item>

			<Form.Item label={<StyledLabel>Nimmst du Medikamente ein?</StyledLabel>} name="medications">
				<InputWrapper>
					<RadioInputText
						onChange={(value) => setMedications(value)} // Update state when value changes
						value={medications} // Controlled input
						options={[
							{ label: 'Ja', value: 'yes' },
							{ label: 'Nein', value: 'no' },
						]}
					/>
				</InputWrapper>
			</Form.Item>

			<Form.Item label={<StyledLabel>Geburtstag</StyledLabel>} name="birthday">
				<DatePicker style={{ width: '100%' }} />
			</Form.Item>

			<Form.Item label={<StyledLabel>Wohnsitz (Land)</StyledLabel>} name="country">
				<Select>
					<Option value="germany">Deutschland</Option>
					<Option value="austria">Österreich</Option>
					<Option value="switzerland">Schweiz</Option>
				</Select>
			</Form.Item>

			<Row gutter={16}>
				<Col span={12}>
					<Form.Item label={<StyledLabel>Bundesland</StyledLabel>} name="state">
						<Select>
							<Option value="baden-wurttemberg">Baden-Württemberg</Option>
							<Option value="bavaria">Bayern</Option>
							<Option value="berlin">Berlin</Option>
							{/* Add other states here */}
						</Select>
					</Form.Item>
				</Col>

				<Col span={12}>
					<Form.Item label={<StyledLabel>Stadt</StyledLabel>} name="city">
						<Input />
					</Form.Item>
				</Col>
			</Row>
		</Form>
	);
};

export default StepOne;
