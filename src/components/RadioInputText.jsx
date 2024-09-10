import React from 'react';
import { Form, Radio } from 'antd';
import styled from 'styled-components';

// Styled Radio Button (Styled to look like Tags)
const StyledRadio = styled(Radio.Button)`
  cursor: pointer;
  padding: 0 16px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${(props) => (props.checked ? '#FFF5EB' : '#FFFFFF')};
  color: ${(props) => (props.checked ? '#E15939' : '#000000')};
  border: 1px solid ${(props) => (props.checked ? '#E15939' : '#F3F3F9')};
  &:hover {
    background-color: #f3f3f9;
  }
`;

const RadioInputText = ({ options, value, onChange }) => {
	return (
		<Form.Item>
			<Radio.Group value={value} onChange={(e) => onChange(e.target.value)}>
				{options.map((option) => (
					<StyledRadio key={option.value} value={option.value}>
						{option.label}
					</StyledRadio>
				))}
			</Radio.Group>
		</Form.Item>
	);
};

export default RadioInputText;
