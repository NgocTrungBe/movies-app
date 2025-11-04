import React from "react";
import noDataImg from "../assets/no-data.svg";

interface Props {
  message?: string;
}

export const NoData: React.FC<Props> = ({
  message = "No movies to display!",
}) => (
  <div className="error-wrapper">
    <div className="error-content">
      <img src={noDataImg} alt="No movies illustration" />
      <p>{message}</p>
    </div>
  </div>
);
