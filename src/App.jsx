import React, { useState } from 'react';
import { Layout, Typography, Steps, ConfigProvider } from 'antd'; // Import ConfigProvider from your UI library
import StepOne from './pages/FormStepOne';
import StepTwo from './pages/FormStepTwo';
import StepThree from './pages/FormStepThree';
import BottomActions from './components/BottomActions';
import enUSLocale from 'antd/es/locale/en_US'; // Import locale if needed

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Step } = Steps;

// Import styled-components
import styled from 'styled-components';

// Create a styled button component
const StyledButton = styled.button`
  background-color: ${(props) => props.primary ? '#E44124' : '#ffffff'};
  color: ${(props) => props.primary ? '#ffffff' : '#E44124'};
  font-family: 'IBM Plex Sans', sans-serif;
  padding: 10px 20px;
  border: 2px solid #E44124;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.primary ? '#c8371f' : '#f0f0f0'};
  }
`;

const App = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const onNext = () => {
		setCurrentStep((prev) => Math.min(prev + 1, 2)); // Prevent going beyond Step 3
	};

	const onBack = () => {
		setCurrentStep((prev) => Math.max(prev - 1, 0)); // Prevent going before Step 1
	};

	return (
		<ConfigProvider
			locale={enUSLocale}
			theme={{
				token: {
					colorPrimary: '#E44124',
					fontFamily: "'IBM Plex Sans', sans-serif",
					controlHeight: 40,
				},
				components: {
					Button: {
						paddingInline: 20,
					},
				},
			}}
		>
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
					{/* Example usage of StyledButton */}

				</Footer>
			</Layout>
		</ConfigProvider>
	);
};

export default App;
