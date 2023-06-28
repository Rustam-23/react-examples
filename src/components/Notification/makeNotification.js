import React from "react";
import { Alert } from "react-bootstrap";
import * as Icons from "react-icons/fa";

export const makeNotification = (iconName, variant, displayName) => {

  const NotificationBase = ({ title, message }) => {

    const Icon = Icons[`Fa${iconName}`];

    return (
      <Alert
        variant={variant}
        className="d-flex justify-content-center align-items-center"
      >
        <Icon size={25} className={`mr-2 text-${variant}`} />
        <p className="mb-0 mr-2 font-weight-bold">{title}</p>
        <p className="mb-0">{message}</p>
      </Alert>
    );
  };

  NotificationBase.displayName = displayName;
  return NotificationBase;
};
