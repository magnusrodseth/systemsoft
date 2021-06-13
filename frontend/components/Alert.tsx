import React from "react";

interface AlertProps {
  message: string;
  icon: any;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  message,
  icon,
  className,
}: AlertProps) => {
  const style = className !== undefined ? className : "";

  return (
    <div className={`${style} grid grid-cols-4 m-2 p-2`}>
      <div className="col-start-1 col-span-1 flex justify-center items-center">
        {icon}
      </div>
      <div className="col-start-2 col-span-2">{message}</div>
    </div>
  );
};

export default Alert;
