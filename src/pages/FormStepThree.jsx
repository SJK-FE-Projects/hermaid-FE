import React, { useState } from 'react';
import { Form, Radio, Checkbox, Select } from 'antd';

const { Option } = Select;

const StepThree = ({ onBack, onNext }) => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log('Step 3 Values:', values);
		onNext(); // Proceed to the next step or handle final submission
	};

	return (
		<Form layout="vertical" form={form} onFinish={onFinish}>
			<Form.Item label="Bist du mit deiner persönlichen Lebenssituation zufrieden?" name="satisfaction">
				<Radio.Group>
					<Radio value="verySatisfied">Sehr zufrieden</Radio>
					<Radio value="satisfied">Zufrieden</Radio>
					<Radio value="neutral">Neutral</Radio>
					<Radio value="dissatisfied">Unzufrieden</Radio>
					<Radio value="veryDissatisfied">Sehr unzufrieden</Radio>
				</Radio.Group>
			</Form.Item>

			<Form.Item label="Wie würdest du den Gesamteinfluss deiner Beschwerden auf dein tägliches Leben bewerten?" name="impact">
				<Radio.Group>
					<Radio value="low">Niedrig</Radio>
					<Radio value="medium">Mittel</Radio>
					<Radio value="high">Hoch</Radio>
				</Radio.Group>
			</Form.Item>

			<Form.Item label="Wie zufrieden bist du mit deiner aktuellen körperlichen Verfassung?" name="physicalWellbeing">
				<Radio.Group>
					<Radio value="verySatisfied">Sehr zufrieden</Radio>
					<Radio value="satisfied">Zufrieden</Radio>
					<Radio value="neutral">Neutral</Radio>
					<Radio value="dissatisfied">Unzufrieden</Radio>
					<Radio value="veryDissatisfied">Sehr unzufrieden</Radio>
				</Radio.Group>
			</Form.Item>

			<Form.Item label="Wie zufrieden bist du mit deiner aktuellen emotionalen Verfassung?" name="emotionalWellbeing">
				<Radio.Group>
					<Radio value="verySatisfied">Sehr zufrieden</Radio>
					<Radio value="satisfied">Zufrieden</Radio>
					<Radio value="neutral">Neutral</Radio>
					<Radio value="dissatisfied">Unzufrieden</Radio>
					<Radio value="veryDissatisfied">Sehr unzufrieden</Radio>
				</Radio.Group>
			</Form.Item>

			<Form.Item label="Deine Gesundheitsziele" name="healthGoals">
				<Checkbox.Group>
					<Checkbox value="weightLoss">Gewichtsreduktion</Checkbox>
					<Checkbox value="betterSleep">Besser Schlafen</Checkbox>
				</Checkbox.Group>
			</Form.Item>

			<Form.Item label="Welche hermaid Angebote interessieren dich?" name="interests">
				<Checkbox.Group>
					<Checkbox value="nutrition">Ernährung</Checkbox>
					<Checkbox value="fitness">Fitness</Checkbox>
					<Checkbox value="mentalHealth">Mentale Gesundheit</Checkbox>
				</Checkbox.Group>
			</Form.Item>

			<Form.Item label="Welcher Lerntyp bist du?" name="learningType">
				<Select>
					<Option value="visual">Visuell</Option>
					<Option value="auditory">Auditiv</Option>
					<Option value="kinesthetic">Kinästhetisch</Option>
				</Select>
			</Form.Item>
		</Form>
	);
};

export default StepThree;
