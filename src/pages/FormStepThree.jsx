import React, { useState } from 'react';
import { Form, Radio, Checkbox, Select } from 'antd';
import StyledLabel from '../components/StyledLabel'; // Import StyledLabel

const { Option } = Select;

const StepThree = ({ onBack, onNext }) => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log('Step 3 Values:', values);
		onNext(); // Proceed to the next step or handle final submission
	};

	return (
		<Form layout="vertical" form={form} onFinish={onFinish}>
			<Form.Item label={<StyledLabel>Bist du mit deiner persönlichen Lebenssituation zufrieden?</StyledLabel>} name="satisfaction">
				<Radio.Group>
					<Radio value="verySatisfied">Sehr zufrieden</Radio>
					<Radio value="satisfied">Zufrieden</Radio>
					<Radio value="neutral">Neutral</Radio>
					<Radio value="dissatisfied">Unzufrieden</Radio>
					<Radio value="veryDissatisfied">Sehr unzufrieden</Radio>
				</Radio.Group>
			</Form.Item>

			<Form.Item label={<StyledLabel>Wie würdest du den Gesamteinfluss deiner Beschwerden auf dein tägliches Leben bewerten?</StyledLabel>} name="impact">
				<Radio.Group>
					<Radio value="low">Niedrig</Radio>
					<Radio value="medium">Mittel</Radio>
					<Radio value="high">Hoch</Radio>
				</Radio.Group>
			</Form.Item>

			<Form.Item label={<StyledLabel>Wie zufrieden bist du mit deiner aktuellen körperlichen Verfassung?</StyledLabel>} name="physicalWellbeing">
				<Radio.Group>
					<Radio value="verySatisfied">Sehr zufrieden</Radio>
					<Radio value="satisfied">Zufrieden</Radio>
					<Radio value="neutral">Neutral</Radio>
					<Radio value="dissatisfied">Unzufrieden</Radio>
					<Radio value="veryDissatisfied">Sehr unzufrieden</Radio>
				</Radio.Group>
			</Form.Item>

			<Form.Item label={<StyledLabel>Wie zufrieden bist du mit deiner aktuellen emotionalen Verfassung?</StyledLabel>} name="emotionalWellbeing">
				<Radio.Group>
					<Radio value="verySatisfied">Sehr zufrieden</Radio>
					<Radio value="satisfied">Zufrieden</Radio>
					<Radio value="neutral">Neutral</Radio>
					<Radio value="dissatisfied">Unzufrieden</Radio>
					<Radio value="veryDissatisfied">Sehr unzufrieden</Radio>
				</Radio.Group>
			</Form.Item>

			<Form.Item label={<StyledLabel>Deine Gesundheitsziele</StyledLabel>} name="healthGoals">
				<Checkbox.Group>
					<Checkbox value="weightLoss">Gewichtsreduktion</Checkbox>
					<Checkbox value="betterSleep">Besser Schlafen</Checkbox>
				</Checkbox.Group>
			</Form.Item>

			<Form.Item label={<StyledLabel>Welche hermaid Angebote interessieren dich?</StyledLabel>} name="interests">
				<Checkbox.Group>
					<Checkbox value="nutrition">Ernährung</Checkbox>
					<Checkbox value="fitness">Fitness</Checkbox>
					<Checkbox value="mentalHealth">Mentale Gesundheit</Checkbox>
				</Checkbox.Group>
			</Form.Item>

			<Form.Item label={<StyledLabel>Welcher Lerntyp bist du?</StyledLabel>} name="learningType">
				<Select mode="multiple">
					<Option value="visual">Visuell</Option>
					<Option value="auditory">Auditiv</Option>
					<Option value="kinesthetic">Kinästhetisch</Option>
				</Select>
			</Form.Item>
		</Form>
	);
};

export default StepThree;
