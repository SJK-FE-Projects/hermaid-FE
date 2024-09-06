import React, { useState, useEffect } from 'react';
import { Form, Radio, Tag } from 'antd';
import DatePicker from '../components/DatePicker'; // Import your custom DatePicker component
import StyledLabel from '../components/StyledLabel'; // Import StyledLabel
import EmojiRadioGroup from '../components/EmojiOptions';

const StepTwo = ({ onBack, onNext }) => {
	const [formData, setFormData] = useState({
		periodLastDay: '',
		regularIntervals: '',
		bleedingIntensity: '',
		bleedingDays: '',
		hormones: '',
		hormoneCheck: '',
		menopause: '',
		dateSelected: null, // Add a field for the date
	});

	const handleChange = (key, value) => {
		setFormData((prevState) => ({ ...prevState, [key]: value }));
	};

	const handleDateChange = (date, dateString) => {
		handleChange('dateSelected', dateString); // Update the dateSelected in state
	};

	// Example useEffect to demonstrate how you can react to date changes
	useEffect(() => {
		if (formData.dateSelected) {
			console.log('Selected date has changed:', formData.dateSelected);
		}
	}, [formData.dateSelected]);

	const handleSubmit = () => {
		console.log('Form Data:', formData);
		onNext(); // Proceed to the next step
	};

	return (
		<Form layout="vertical" onFinish={handleSubmit}>
			<Form.Item label={<StyledLabel>Letzter Tag deiner Periode</StyledLabel>} name="period">
				<DatePicker style={{ width: '100%' }}
					onChange={handleDateChange} // Pass the date change handler
				/>
			</Form.Item>

			<Form.Item label={<StyledLabel>Hast du regemäßige Abstände zwischen 21-28 Tage?</StyledLabel>} name="medications">
				<Radio.Group
					onChange={(e) => handleChange('hormones', e.target.value)}
					value={formData.hormones}
				>
					<Tag value="yes">Ja</Tag>
					<Tag value="no">Nein</Tag>
				</Radio.Group>
			</Form.Item>


			<Form.Item label={<StyledLabel>Wie stark ist oder war deine Blutung durchschnittlich?</StyledLabel>}>
				<Radio.Group
					onChange={(e) => handleChange('bleedingIntensity', e.target.value)}
					value={formData.bleedingIntensity}
				>
					{['🙁', '😶', '😐', '🙂', '😍'].map((value) => (
						<Radio key={value} value={value}>
							{value}
						</Radio>
					))}
				</Radio.Group>
			</Form.Item>

			<Form.Item label={<StyledLabel>Wie viele Tage blutest du durchschnittlich?</StyledLabel>}>
				<Radio.Group
					onChange={(e) => handleChange('bleedingDays', e.target.value)}
					value={formData.bleedingDays}
				>
					{[0, 1, 2, 3, 4].map((value) => (
						<Radio key={value} value={value}>
							{value}
						</Radio>
					))}
				</Radio.Group>
			</Form.Item>

			<Form.Item label={<StyledLabel>Nimmst du hormone ein?</StyledLabel>} name="medications">
				<Radio.Group
					onChange={(e) => handleChange('hormoneCheck', e.target.value)}
					value={formData.hormoneCheck}
				>
					<Tag value="yes">Ja</Tag>
					<Tag value="no">Nein</Tag>
					<Tag value="no">Vielleicht</Tag>
				</Radio.Group>
			</Form.Item>

			<Form.Item label={<StyledLabel>Hast du deine Hormonwerte in den letzten 6 Monaten überprüfen lassen?</StyledLabel>} name="medications">
				<Radio.Group
					onChange={(e) => handleChange('menopause', e.target.value)}
					value={formData.menopause}
				>
					<Tag value="yes">Ja</Tag>
					<Tag value="no">Nein</Tag>
				</Radio.Group>
			</Form.Item>
			<Form.Item label={<StyledLabel>Vermutest oder weisst du ob du vielleichtschon in den Wechseljahren bist?</StyledLabel>} name="medications">
				<Radio.Group
					onChange={(e) => handleChange('menopause', e.target.value)}
					value={formData.menopause}
				>
					<Tag value="yes">Ja</Tag>
					<Tag value="no">Nein</Tag>
					<Tag value="no">Vieleicht</Tag>
				</Radio.Group>
			</Form.Item>









		</Form>
	);
};

export default StepTwo;
