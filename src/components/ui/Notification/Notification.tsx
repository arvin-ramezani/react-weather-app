import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

import { notificationVariants } from './Notification.variants';
import classes from './Notification.module.css';

export interface NotificationProps {
  content: string;
  show: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  content: text,
  show,
  onClose,
}) => {
  return ReactDOM.createPortal(
    <motion.div
      variants={notificationVariants}
      initial='hidden'
      animate='animate'
      exit='hidden'
      custom={show}
      className={classes.notification}
    >
      <p>{text}</p>

      <div className={classes['notification-actions']}>
        <button onClick={onClose}>OK</button>
      </div>
    </motion.div>,
    document.getElementById('notification')!
  );
};

export default Notification;
