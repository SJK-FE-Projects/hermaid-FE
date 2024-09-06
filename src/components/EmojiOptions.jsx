import React from 'react';
import { Form, Radio } from 'antd';
import StyledLabel from './StyledLabel'; // Import your StyledLabel component
import styled from 'styled-components';

const EmojiOption = styled.div`
  width: 50px;
  height: 50px;
  background-color: #F7F6F2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  border: ${(props) => (props.selected ? '2px solid #E44124' : '2px solid transparent')};
  transition: border 0.3s ease;

  &:hover {
    border: 2px solid #E44124;
  }
`;

const EmojiRadioGroup = ({ question, onChange, value }) => {
	const emojiOptions = ['🙁', '😶', '😐', '🙂', '😍'];

	return (
		<Form.Item label={<StyledLabel>{question}</StyledLabel>}>
			<div style={{ display: 'flex', gap: '10px' }}>
				{emojiOptions.map((emoji) => (
					<Radio
						key={emoji}
						value={emoji}
						style={{ display: 'none' }} // Hide the actual radio input
						checked={value === emoji}
					>
						<EmojiOption
							onClick={() => onChange({ target: { value: emoji } })}
							selected={value === emoji}
						>
							{emoji}
						</EmojiOption>
					</Radio>
				))}
			</div>
		</Form.Item>
	);
};

export default EmojiRadioGroup;
