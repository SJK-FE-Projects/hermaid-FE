import React, { useState, useEffect } from 'react';
import { Form, Radio, Input } from 'antd';
import DatePicker from '../components/DatePicker'; // Import your custom DatePicker component

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
			<Form.Item>
				<DatePicker
					label="Letzter Tag deiner Periode"
					onChange={handleDateChange} // Pass the date change handler
				/>
			</Form.Item>

			<Form.Item label="Hast du regelmäßige Abstände zwischen 21-28 Tagen?">
				<Radio.Group
					onChange={(e) => handleChange('regularIntervals', e.target.value)}
					value={formData.regularIntervals}
				>
					<Radio value="yes">Ja</Radio>
					<Radio value="no">Nein</Radio>
				</Radio.Group>
			</Form.Item>

			<Form.Item label="Wie stark ist oder war deine Blutung durchschnittlich?">
				<Radio.Group
					onChange={(e) => handleChange('bleedingIntensity', e.target.value)}
					value={formData.bleedingIntensity}
				>
					{[0, 1, 2, 3, 4].map((value) => (
						<Radio key={value} value={value}>
							{value}
						</Radio>
					))}
				</Radio.Group>
			</Form.Item>

			<Form.Item label="Wie viele Tage blutest du durchschnittlich?">
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

			<Form.Item label="Nimmst du Hormone ein?">
				<Radio.Group
					onChange={(e) => handleChange('hormones', e.target.value)}
					value={formData.hormones}
				>
					<Radio value="yes">Ja</Radio>
					<Radio value="no">Nein</Radio>
				</Radio.Group>
			</Form.Item>

			<Form.Item label="Hast du deine Hormonwerte in den letzten 6 Monaten überprüfen lassen?">
				<Radio.Group
					onChange={(e) => handleChange('hormoneCheck', e.target.value)}
					value={formData.hormoneCheck}
				>
					<Radio value="yes">Ja</Radio>
					<Radio value="no">Nein</Radio>
					<Radio value="maybe">Vielleicht</Radio>
				</Radio.Group>
			</Form.Item>

			<Form.Item label="Vermutest oder weißt du ob du vielleicht schon in den Wechseljahren bist?">
				<Radio.Group
					onChange={(e) => handleChange('menopause', e.target.value)}
					value={formData.menopause}
				>
					<Radio value="yes">Ja</Radio>
					<Radio value="no">Nein</Radio>
					<Radio value="maybe">Vielleicht</Radio>
				</Radio.Group>
			</Form.Item>
		</Form>
	);
};

export default StepTwo;
