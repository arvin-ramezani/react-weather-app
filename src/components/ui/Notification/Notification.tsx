import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Notification.module.css';

export interface NotificationProps {
  content: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  content: text,
  onClose,
}) => {
  const content = (
    <div className={classes.notification}>
      <p>{text}</p>

      <div className={classes['notification-actions']}>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );

  return (
    <>
      {ReactDOM.createPortal(content, document.getElementById('notification')!)}
    </>
  );
};

export default Notification;
