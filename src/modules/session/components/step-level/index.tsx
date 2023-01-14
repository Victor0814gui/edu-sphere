import React from 'react';
import { Image } from 'react-native';
import { 
  Container,
  ItemStep,
  ProgressBar,
} from './styles';

import { CalendarIconSvg,UserIconSvg } from "../../assets/icons"
import { useAuthStepsContextProvider } from '../../contexts/auth-steps';

export function StepLevel() {
  const { step } = useAuthStepsContextProvider()
  console.log(step,"========================");
  const stepActiveOne = step === 1 || step === 2 || step === 3;
  const stepActiveTwo = step === 2 || step === 3;
  const stepActiveThree = step === 3;

  console.log(step);
  return (
    <Container>
      <ItemStep active={stepActiveOne}>
        <Image style={{height: 25,width: 25}} source={CalendarIconSvg} />
      </ItemStep>
      <ProgressBar active={stepActiveTwo}/>
      <ItemStep active={stepActiveTwo}>
        <Image style={{height: 25,width: 25}} source={UserIconSvg} />
      </ItemStep>
      <ProgressBar active={stepActiveThree}/>
      <ItemStep active={stepActiveThree}>
        <Image style={{height: 25,width: 25}} source={CalendarIconSvg} />
      </ItemStep>
    </Container>
  );
}