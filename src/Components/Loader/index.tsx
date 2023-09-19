import { StyledBackground, StyledLoader } from './styles';
import { LoaderProps } from '../../interfaces';

const Loader = ({ loading }: LoaderProps) => {
  return (
    <>
      {loading && (
        <StyledBackground>
          <StyledLoader />
        </StyledBackground>
      )}
    </>
  );
};

export default Loader;
