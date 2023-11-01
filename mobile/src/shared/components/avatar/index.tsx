import React from 'react';
import { View } from 'react-native';

import {
  ProfileIconImageSubstituteContainer,
  ProfileImage,
} from './styles';

import { User } from "phosphor-react-native";


type AvatarProps = {
  avatarUrl: string | undefined;
}

export function Avatar({ avatarUrl }: AvatarProps) {

  if (!!avatarUrl) {
    return (
      <ProfileImage source={{ uri: avatarUrl }} />
    )
  }

  return (
    <ProfileIconImageSubstituteContainer>
      <User size={24} color="#f2f2f2" weight="duotone" />
    </ProfileIconImageSubstituteContainer>
  );
}