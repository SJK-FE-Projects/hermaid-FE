import React from 'react';
import { Form, Radio } from 'antd';
import styled from 'styled-components';

// Styled Radio Button (Styled to look like Tags)
const StyledRadio = styled(Radio.Button)`
  cursor: pointer;
  padding: 0 16px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => (props.checked ? '#FFF5EB' : 'none')};
  color: ${(props) => (props.checked ? '#E15939' : '#000000')};
  border: 1px solid ${(props) => (props.checked ? '#E15939' : 'none')};
  &:hover {
    background-color: #FFF5EB;
  }
`;

// Styled Radio Group with flex and gap
const StyledRadioGroup = styled(Radio.Group)`
  display: flex;
  flex-direction: row;
  gap: 8px; /* Adds gap between the radio buttons */
`;

const RadioInputText = ({ options, value, onChange }) => {
	return (
		<Form.Item>
			<StyledRadioGroup value={value} onChange={(e) => onChange(e.target.value)}>
				{options.map((option) => (
					<StyledRadio key={option.value} value={option.value}>
						{option.label}
					</StyledRadio>
				))}
			</StyledRadioGroup>
		</Form.Item>
	);
};

export default RadioInputText;
