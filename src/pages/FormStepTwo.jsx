import React, { useState, useEffect } from 'react';
import { Form } from 'antd';
import DatePicker from '../components/DatePicker'; // Import your custom DatePicker component
import StyledLabel from '../components/StyledLabel'; // Import StyledLabel
import RadioInputText from '../components/RadioInputText'; // Import RadioInputText
import EmojiRadioGroup from '../components/EmojiOptions'; // Import your EmojiRadioGroup component

const StepTwo = ({ onBack, onNext }) => {
	const [formData, setFormData] = useState({
		periodLastDay: '',
		regularIntervals: '',
		bleedingIntensity: '',
		bleedingDays: '',
		hormoneCheck: '',
		menopause: '',
		menopauseCheck: '',
		dateSelected: null, // Add a field for the date
	});

	const handleChange = (key, value) => {
		setFormData((prevState) => ({ ...prevState, [key]: value }));
	};

	const handleDateChange = (date, dateString) => {
		handleChange('dateSelected', dateString); // Update the dateSelected in state
	};

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
				<DatePicker style={{ width: '100%' }} onChange={handleDateChange} />
			</Form.Item>

			<Form.Item label={<StyledLabel>Hast du regelmäßige Abstände zwischen 21-28 Tage?</StyledLabel>} name="regularIntervals">
				<RadioInputText
					onChange={(value) => handleChange('regularIntervals', value)}
					value={formData.regularIntervals}
					options={[
						{ label: 'Ja', value: 'yes' },
						{ label: 'Nein', value: 'no' },
					]}
				/>
			</Form.Item>

			<Form.Item label={<StyledLabel>Wie stark ist oder war deine Blutung durchschnittlich?</StyledLabel>}>
				<EmojiRadioGroup
					question="Wie stark ist oder war deine Blutung durchschnittlich?"
					onChange={(value) => handleChange('bleedingIntensity', value)}
					value={formData.bleedingIntensity}
				/>
			</Form.Item>

			<Form.Item label={<StyledLabel>Wie viele Tage blutest du durchschnittlich?</StyledLabel>}>
				<EmojiRadioGroup
					question="Wie viele Tage blutest du durchschnittlich?"
					onChange={(value) => handleChange('bleedingDays', value)}
					value={formData.bleedingDays}
				/>
			</Form.Item>

			<Form.Item label={<StyledLabel>Nimmst du Hormone ein?</StyledLabel>} name="hormoneCheck">
				<RadioInputText
					onChange={(value) => handleChange('hormoneCheck', value)}
					value={formData.hormoneCheck}
					options={[
						{ label: 'Ja', value: 'yes' },
						{ label: 'Nein', value: 'no' },
						{ label: 'Vielleicht', value: 'maybe' },
					]}
				/>
			</Form.Item>

			<Form.Item label={<StyledLabel>Hast du deine Hormonwerte in den letzten 6 Monaten überprüfen lassen?</StyledLabel>} name="menopause">
				<RadioInputText
					onChange={(value) => handleChange('menopause', value)}
					value={formData.menopause}
					options={[
						{ label: 'Ja', value: 'yes' },
						{ label: 'Nein', value: 'no' },
					]}
				/>
			</Form.Item>

			<Form.Item label={<StyledLabel>Vermutest oder weißt du, ob du schon in den Wechseljahren bist?</StyledLabel>} name="menopauseCheck">
				<RadioInputText
					onChange={(value) => handleChange('menopauseCheck', value)}
					value={formData.menopauseCheck}
					options={[
						{ label: 'Ja', value: 'yes' },
						{ label: 'Nein', value: 'no' },
						{ label: 'Vielleicht', value: 'maybe' },
					]}
				/>
			</Form.Item>
		</Form>
	);
};

export default StepTwo;
