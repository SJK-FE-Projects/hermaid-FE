import React, { useState } from 'react';
import { Layout, ConfigProvider } from 'antd'; // Import ConfigProvider from your UI library
import StepOne from './pages/FormStepOne';
import StepTwo from './pages/FormStepTwo';
import StepThree from './pages/FormStepThree';
import BottomActions from './components/BottomActions';
import enUSLocale from 'antd/es/locale/en_US'; // Import locale if needed

// Import your custom Header component
import CustomHeader from './components/Header';

const { Content, Footer } = Layout;

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
				{/* Use your custom Header component */}
				<CustomHeader
					title="Periodengesundheit"
					currentStep={currentStep}
					onStepChange={setCurrentStep}
				/>
				<Content style={{ padding: '20px 50px' }}>
					{currentStep === 0 && <StepOne onNext={onNext} />}
					{currentStep === 1 && <StepTwo onNext={onNext} onBack={onBack} />}
					{currentStep === 2 && <StepThree onNext={onNext} onBack={onBack} />}
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					<BottomActions onBack={onBack} onNext={onNext} />
				</Footer>
			</Layout>
		</ConfigProvider>
	);
};

export default App;
