import React from "react";
import errorImg from "../assets/error.webp";

interface Props {
  message?: string;
}

const ErrorState: React.FC<Props> = ({
  message = "Failed to load movies. Please try again later.",
}) => (
  <div className="error-wrapper">
    <div className="error-content">
      <img src={errorImg} alt="error" />
      <p>{message}</p>
    </div>
  </div>
);

export default ErrorState;
