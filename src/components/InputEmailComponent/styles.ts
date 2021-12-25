import styled, { css } from 'styled-components/native';
import { TextInputProps } from 'react-native';
import { projectColors } from '../../Themes/WhiteLabelTheme/WhiteLabel';
import { PrimaryButton } from '../../Themes/WhiteLabelTheme/WhiteLabel';

interface InputProps {
  error: boolean;
  focus: boolean;
}
interface Input extends TextInputProps {
  error: boolean;
  changeInFocus: boolean;
}
export const TitleInput = styled.Text<InputProps>`
  font-family: Avenir;
  margin-bottom: -5px;
  font-size: 13px;
  color: ${(props) =>
    props.error
      ? projectColors.error
      : props.focus
      ? PrimaryButton
      : '#666380'};
`;

export const Wrapper = styled.View`
  margin-bottom: 15px;

  width: 100%;
`;

export const StyledTextInput = styled.TextInput<Input>`
  ${(props) =>
    props.changeInFocus
      ? css`
          height: 40px;
          width: 100%;
          border-bottom-color: ${PrimaryButton};
          border-bottom-width: 1px;
          color: #343a40;
        `
      : css`
          height: 40px;
          width: 100%;
          border-bottom-color: ${props.error ? projectColors.error : '#ccc'};
          border-bottom-width: 1px;
          color: #343a40;
        `}
`;

export const TextError = styled.Text`
  color: ${projectColors.error};
  margin-top: 1px;
`;
