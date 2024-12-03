import React, { useContext } from 'react'
import EcomContext from '../../context/EcomContext'

function Alert() {
  const { alertInfo } = useContext(EcomContext);
  return (
    <>
      {alertInfo.show && (
        <div className={`${alertInfo.type === "success"? "bg-green-300" : "bg-red-500"}  flex justify-center text-center m-auto p-3 w-[85%] `}>
            {alertInfo.message}
        </div>
      )}
    </>
  );
};

export default Alert;
