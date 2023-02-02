import { TouchableOpacityProps } from "react-native";

import { Container, FilterStyleProps, Title } from "./styles";

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActivated = false, ...rest }: Props) {
  return (
    <Container isActivated={isActivated} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
