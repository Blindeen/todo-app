import { BackgroundContainer, NotebookContainer } from './styles';
import { BackgroundProps } from '../../interfaces';

const Background = ({ children }: BackgroundProps) => {
  return (
    <BackgroundContainer>
      <NotebookContainer>{children}</NotebookContainer>
    </BackgroundContainer>
  );
};

export default Background;
