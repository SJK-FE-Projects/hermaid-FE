import React from 'react';
import { Button } from 'antd';

const BottomActions = ({ onBack, onNext }) => {
	return (
		<div className="bottom-actions-container">
			<Button onClick={onBack}>Zurück</Button>
			<Button type="primary" onClick={onNext} style={{ marginLeft: '10px' }}>
				Weiter
			</Button>
		</div>
	);
};

export default BottomActions;
