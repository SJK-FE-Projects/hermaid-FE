// Header.jsx
import React from 'react';
import { Steps, Button } from 'antd';

const { Step } = Steps;

const Header = ({ title, currentStep, onStepChange }) => {
	return (
		<div className="header-container" style={{ padding: '0 20px', background: '#001529', color: 'white' }}>
			<h1>{title}</h1>
			<Steps current={currentStep} style={{ margin: '20px 0' }}>
				<Step title="Step 1" />
				<Step title="Step 2" />
				<Step title="Step 3" />
			</Steps>
			<div>
				<Button
					type="default"
					onClick={() => onStepChange(currentStep - 1)}
					disabled={currentStep === 0}
					style={{ marginRight: '8px' }}
				>
					Zurück
				</Button>
				<Button
					type="primary"
					onClick={() => onStepChange(currentStep + 1)}
					disabled={currentStep === 2}
				>
					Nächster
				</Button>
			</div>
		</div>
	);
};

export default Header;
