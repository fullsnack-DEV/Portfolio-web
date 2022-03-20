import React from "react";

export const Button = ({ title }) => {
  return (
    <div className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl  font-semibold font-Kanit rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
      {title}
    </div>
  );
};
