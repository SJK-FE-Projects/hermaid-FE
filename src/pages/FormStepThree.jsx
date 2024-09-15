import React, { useState } from 'react';
import { Form, Select } from 'antd';
import StyledLabel from '../components/StyledLabel'; // Import StyledLabel
import EmojiRadioGroup from '../components/EmojiOptions'; // Import your EmojiRadioGroup component
import InputWrapper from '../components/InputWrapper';

const { Option } = Select;

const StepThree = ({ onBack, onNext }) => {
	const [form] = Form.useForm();

	// Deconstruct form state similar to StepTwo
	const [formData, setFormData] = useState({
		satisfaction: '',
		impact: '',
		physicalWellbeing: '',
		emotionalWellbeing: '',
		healthGoals: [],
		interests: [],
		learningType: [],
	});

	// Helper to update formData state
	const handleChange = (key, value) => {
		setFormData((prevState) => ({ ...prevState, [key]: value }));
	};

	const onFinish = (values) => {
		// Combine form values and formData states
		const formDataWithValues = {
			...formData,
			...values, // In case there are additional fields submitted from antd form
		};
		console.log('Step 3 Values:', formDataWithValues);
		onNext(); // Proceed to the next step or handle final submission
	};

	return (
		<Form layout="vertical" form={form} onFinish={onFinish}>

			{/* Question 1: Satisfaction */}
			<Form.Item label={<StyledLabel>Bist du mit deiner persönlichen Lebenssituation zufrieden?</StyledLabel>}>
				<InputWrapper>
					<EmojiRadioGroup
						onChange={(value) => handleChange('satisfaction', value)}
						value={formData.satisfaction}
					/>
				</InputWrapper>
			</Form.Item>

			{/* Question 2: Impact */}
			<Form.Item label={<StyledLabel>Wie würdest du den Gesamteinfluss deiner Beschwerden auf dein tägliches Leben bewerten?</StyledLabel>}>
				<InputWrapper>
					<EmojiRadioGroup
						onChange={(value) => handleChange('impact', value)}
						value={formData.impact}
					/>
				</InputWrapper>
			</Form.Item>

			{/* Question 3: Physical Wellbeing */}
			<Form.Item label={<StyledLabel>Wie zufrieden bist du mit deiner aktuellen körperlichen Verfassung?</StyledLabel>}>
				<InputWrapper>
					<EmojiRadioGroup
						onChange={(value) => handleChange('physicalWellbeing', value)}
						value={formData.physicalWellbeing}
					/>
				</InputWrapper>
			</Form.Item>

			{/* Question 4: Emotional Wellbeing */}
			<Form.Item label={<StyledLabel>Wie zufrieden bist du mit deiner aktuellen emotionalen Verfassung?</StyledLabel>}>
				<InputWrapper>
					<EmojiRadioGroup
						onChange={(value) => handleChange('emotionalWellbeing', value)}
						value={formData.emotionalWellbeing}
					/>
				</InputWrapper>
			</Form.Item>

			{/* Health Goals (using Select multiple) */}
			<Form.Item label={<StyledLabel>Deine Gesundheitsziele</StyledLabel>} name="healthGoals">
				<Select
					mode="multiple"
					placeholder="Wähle deine Ziele"
					onChange={(selectedValues) => handleChange('healthGoals', selectedValues)}
					value={formData.healthGoals}
				>
					<Option value="weightLoss">Gewichtsreduktion</Option>
					<Option value="betterSleep">Besser Schlafen</Option>
					<Option value="increaseFitness">Fitness Steigern</Option>
				</Select>
			</Form.Item>

			{/* Interests (using Select multiple) */}
			<Form.Item label={<StyledLabel>Welche hermaid Angebote interessieren dich?</StyledLabel>} name="interests">
				<Select
					mode="multiple"
					placeholder="Wähle deine Interessen"
					onChange={(selectedValues) => handleChange('interests', selectedValues)}
					value={formData.interests}
				>
					<Option value="nutrition">Ernährung</Option>
					<Option value="fitness">Fitness</Option>
					<Option value="mentalHealth">Mentale Gesundheit</Option>
					<Option value="sleepQuality">Schlafqualität</Option>
				</Select>
			</Form.Item>

			{/* Learning Type (using Select multiple) */}
			<Form.Item label={<StyledLabel>Welcher Lerntyp bist du?</StyledLabel>} name="learningType">
				<Select
					mode="multiple"
					placeholder="Wähle deinen Lerntyp"
					onChange={(selectedValues) => handleChange('learningType', selectedValues)}
					value={formData.learningType}
				>
					<Option value="visual">Visuell</Option>
					<Option value="auditory">Auditiv</Option>
					<Option value="kinesthetic">Kinästhetisch</Option>
				</Select>
			</Form.Item>
		</Form>
	);
};

export default StepThree;
