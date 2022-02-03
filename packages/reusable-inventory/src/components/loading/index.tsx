import { StyledLoading } from './styles';

type LoadingProps = {
  bgColor?: string;
  color?: string;
};

export const Loading = ({
  bgColor = 'rgba(255, 0, 0, 0.1)',
  color = 'pink',
}: LoadingProps) => {
  console.log({ bgColor, color });

  return <StyledLoading bg={bgColor} color={color} />;
};
