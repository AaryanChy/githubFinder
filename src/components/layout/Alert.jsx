import { useContext } from "react";
import { AlertContext } from "../../context/alert/AlertContext";
const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <p className='flex items-start mb-4 space-x-2'>
        {alert.type === "Error" && (
          <strong className='flex-1 text-red-500 font-bold text-2xl'>
            {alert.message}
          </strong>
        )}
      </p>
    )
  );
};

export default Alert;
