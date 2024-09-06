import React from 'react';
import { Button } from 'antd';

const BottomActions = ({ onBack, onNext }) => {
	return (
		<div className="bottom-actions-container" style={{ display: 'flex', width: '100%', gap: "10px" }}>
			<Button onClick={onBack} style={{ width: '50%' }}>Zurück</Button>
			<Button type="primary" onClick={onNext} style={{ width: '50%' }}>
				Weiter
			</Button>
		</div>
	);
};

export default BottomActions;
