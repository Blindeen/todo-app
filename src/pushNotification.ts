import { notification } from 'antd';
import { capitalize } from 'lodash';

import palette from './palette';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const pushNotification = (type: NotificationType, title: string, description: string, duration = 5) => {
  notification[type]({
    message: capitalize(title),
    description: capitalize(description),
    duration: duration,
    placement: 'bottomRight',
    style: {
      backgroundColor: palette.freshwaterLemon,
      borderRadius: '0',
      fontFamily: 'Consolas, monospace',
    },
  });
};

export default pushNotification;
