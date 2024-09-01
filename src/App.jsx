import React, { useState } from 'react';
import { Layout, Typography, Steps } from 'antd';
import StepOne from './pages/FormStepOne';
import StepTwo from './pages/FormStepTwo';
import StepThree from './pages/FormStepThree';
import BottomActions from './components/BottomActions';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Step } = Steps;

const App = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const onNext = () => {
		setCurrentStep((prev) => Math.min(prev + 1, 2)); // Prevent going beyond Step 3
	};

	const onBack = () => {
		setCurrentStep((prev) => Math.max(prev - 1, 0)); // Prevent going before Step 1
	};

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Header style={{ background: '#001529', padding: '0 20px' }}>
				<Title style={{ color: 'white', margin: 0 }} level={3}>
					Periodengesundheit
				</Title>
				<Steps current={currentStep} style={{ margin: '20px 0' }}>
					<Step title="Step 1" />
					<Step title="Step 2" />
					<Step title="Step 3" />
				</Steps>
			</Header>
			<Content style={{ padding: '20px 50px' }}>
				{currentStep === 0 && <StepOne onNext={onNext} />}
				{currentStep === 1 && <StepTwo onNext={onNext} onBack={onBack} />}
				{currentStep === 2 && <StepThree onNext={onNext} onBack={onBack} />}
			</Content>
			<Footer style={{ textAlign: 'center' }}>
				<BottomActions onBack={onBack} onNext={onNext} />
			</Footer>
		</Layout>
	);
};

export default App;

