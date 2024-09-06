import React from 'react';
import { Steps, Button } from 'antd';
import styled from 'styled-components';

const { Step } = Steps;

// Styled Components
const StyledHeader = styled.header`
  background-color: #F3F3F9;
  height: 108px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0 16px;
`;

const Title = styled.h1`
  font-family: 'IBM Plex Serif', serif;
  font-size: 18px;
  color: #494959;
  margin: 0;
  text-align: left;
`;

const StyledSteps = styled(Steps)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;

  .ant-steps-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-steps-item-icon {
    width: 20px;
    height: 20px;
    line-height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px dashed #F3F3F9;
    background-color: #F3F3F9;
  }

  .ant-steps-item-process .ant-steps-item-icon,
  .ant-steps-item-finish .ant-steps-item-icon {
    background-color: #535366;
    border: none;
  }

  .ant-steps-item-title {
    font-size: 14px;
    color: #8F8FA8; /* Gray 300 */
  }
`;

const StyledButtonContainer = styled.div`
  margin-top: 16px;

  button {
    margin-right: 8px;
  }
`;

const Header = ({ title, currentStep, onStepChange }) => {
	return (
		<StyledHeader>
			<Title>{title}</Title>
			<StyledSteps current={currentStep}>
				<Step title="Step 1" />
				<Step title="Step 2" />
				<Step title="Step 3" />
			</StyledSteps>

		</StyledHeader>
	);
};

export default Header;
