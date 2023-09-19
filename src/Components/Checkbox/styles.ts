import styled from 'styled-components';
import { CheckCircleFilled } from '@ant-design/icons';

import palette from '../../palette';

export const UncheckedIcon = styled('div')`
  min-height: 19px;
  min-width: 19px;

  box-sizing: border-box;
  border: 2px solid ${palette.advertisements};
  border-radius: 50%;
`;

export const CheckedIcon = styled(CheckCircleFilled)`
  color: ${palette.avoid};

  svg {
    height: 19px;
    width: 19px;
  }

  &:hover {
    cursor: default;
  }
`;
