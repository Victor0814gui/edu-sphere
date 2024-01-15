import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  Container,
  ItemStep,
  ProgressBar,
} from './styles';

import { useAuthStepsContextProvider } from '@shared/contexts/auth-steps';
import { COLORS } from '@shared/theme';
import Icon from "react-native-vector-icons/Feather";


const StepItem = (props: {
  isActive: boolean,
  iconName: string,
}) => {
  const [onHover, setOnHover] = useState(false)

  const onMouseEnter = () => {
    setOnHover(true)
  }
  const onMouseLeave = () => {
    setOnHover(false)
  }

  return (
    <ItemStep
      active={props.isActive}
      onHover={onHover}
      //@ts-ignore
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Icon name={props.iconName} size={22} color={props.isActive ? COLORS.green_500 : COLORS.grey_400} />
    </ItemStep>
  )
}

export function StepLevel() {
  const { step } = useAuthStepsContextProvider()
  const stepActiveOne = step === 1 || step === 2 || step === 3;
  const stepActiveTwo = step === 2 || step === 3;
  const stepActiveThree = step === 3;

  console.log(step);
  return (
    <Container>
      <StepItem
        isActive={stepActiveOne}
        iconName="mail"
      />
      <ProgressBar active={stepActiveTwo} />
      <StepItem
        isActive={stepActiveTwo}
        iconName="calendar"
      />
      <ProgressBar active={stepActiveThree} />
      <StepItem
        isActive={stepActiveThree}
        iconName="user"
      />
      {/* <ItemStep active={stepActiveOne}>
        <Icon name="mail" size={22} color={COLORS.green_500}/>
      </ItemStep>
      <ProgressBar active={stepActiveTwo}/>
      <ItemStep active={stepActiveTwo}>
        <Icon name="calendar" size={22} color={stepActiveTwo ? COLORS.green_500 : COLORS.grey_400}/>
      </ItemStep>
      <ProgressBar active={stepActiveThree}/>
      <ItemStep active={stepActiveThree}>
        <Icon name="user" size={22} color={stepActiveThree ? COLORS.green_500 : COLORS.grey_400}/>
      </ItemStep> */}
    </Container>
  );
}