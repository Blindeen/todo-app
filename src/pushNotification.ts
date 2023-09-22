import { notification } from 'antd';

import palette from './palette';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const pushNotification = (type: NotificationType, title: string, description: string, duration = 5) => {
  notification[type]({
    message: title,
    description: description,
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
