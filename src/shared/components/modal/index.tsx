import React from 'react';
import { PlatformColor } from 'react-native';
import { 
  Container,
  Title,
  Description,
} from './styles';

export const Modal = ({
  title="asdçfkljald falkdfçlkaçlsdfçlafa df asd fasd f asdf",
  description="asdçfkljald falkdfçlkaçlsdfçlafa df asd fasd f asdf as df as df asdf a sdf as df asd f asd fa sdf as df asdflkjasdl fas df asdf asd f asdf asd fasdi fu asjdkf asdf asd fas dflkasd f ahsdfasdf asd f asdf",
}) => {
  return (
    <Container
    style={{
      backgroundColor: PlatformColor('SystemAccentColorLight1')
    }}>
      <Title>{title}</Title>
      <Description>{description}</Description>

    </Container>
  );
}