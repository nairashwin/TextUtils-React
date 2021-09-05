import React from "react";
import { IAlert } from "../App";

interface AlertProps {
  alert?: IAlert;
}
const Alert = ({ alert }: AlertProps) => {
  const capitalizeFirstChar = (type: string) =>
    type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalizeFirstChar(alert.type)}</strong>: {alert.msg}
          {/* <button
            type="button"
            className="btn-close"
            data-dismiss="alert"
            aria-label="Close"
          /> */}
        </div>
      )}
    </>
  );
};

export default Alert;
