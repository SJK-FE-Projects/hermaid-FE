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

const EmojiRadioGroup = ({ question, value, onChange }) => {
	const options = [
		{ emoji: '🙁', value: 1 },
		{ emoji: '😶', value: 2 },
		{ emoji: '😐', value: 3 },
		{ emoji: '🙂', value: 4 },
		{ emoji: '😍', value: 5 },
	];

	return (
		<Form.Item label={question}>
			<StyledRadioGroup value={value} onChange={(e) => onChange(e.target.value)}>
				{options.map((option) => (
					<StyledRadio key={option.value} value={option.value}>
						{option.emoji}
					</StyledRadio>
				))}
			</StyledRadioGroup>
		</Form.Item>
	);
};

export default EmojiRadioGroup;
