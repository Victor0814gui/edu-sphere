import React from 'react';
import { Image } from 'react-native';
import { 
  Container,
  ItemStep,
  ProgressBar,
} from './styles';

import { CalendarIconSvg,UserIconSvg } from "../../assets/icons"
import { useAuthStepsContextProvider } from '../../contexts/auth-steps';
import { COLORS } from '../../../../shared/theme';
import Icon from "react-native-vector-icons/Feather";

export function StepLevel() {
  const { step } = useAuthStepsContextProvider()
  const stepActiveOne = step === 1 || step === 2 || step === 3;
  const stepActiveTwo = step === 2 || step === 3;
  const stepActiveThree = step === 3;

  console.log(step);
  return (
    <Container>
      <ItemStep active={stepActiveOne}>
        <Icon name="mail" size={22} color={COLORS.green_500}/>
      </ItemStep>
      <ProgressBar active={stepActiveTwo}/>
      <ItemStep active={stepActiveTwo}>
        <Icon name="calendar" size={22} color={stepActiveTwo ? COLORS.green_500 : COLORS.grey_400}/>
      </ItemStep>
      <ProgressBar active={stepActiveThree}/>
      <ItemStep active={stepActiveThree}>
        <Icon name="user" size={22} color={stepActiveThree ? COLORS.green_500 : COLORS.grey_400}/>
      </ItemStep>
    </Container>
  );
}