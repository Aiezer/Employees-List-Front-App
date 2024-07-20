import React from 'react'
import EmployeeProps from '../interfaces/EmployeeProps';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const Employee: React.FC<EmployeeProps> = ({ id, name, job, admission_date, phone, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`employeeId=${id} p-5 border-b bg-white h-15`}>
      <div className="flex items-center justify-between align-middle">
        <div className="flex items-center">
          <img src={image} alt={name} className="w-[34px] h-[34px] rounded-full" />
        </div>
        <div className="ml-4 flex justify-start align-baseline">
          <div className="h3 flex justify-start">{name}</div>
        </div>
        <button onClick={() => setExpanded(!expanded)} >
          {<button onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <>
                <BsChevronUp className="h-[32px] w-[32px] flex items-center justify-center" />
              </>
            ) : (
              <>
                <BsChevronDown className="h-[32px] w-[32px] flex items-center justify-center" />
              </>
            )}
          </button>}
        </button>
      </div>
      {
        expanded && (
          <div className="mt-2 text-sm text-gray-500">
            <div className='flex justify-between mt-4'>
              <h2 className="font-roboto font-medium text-h2">
                Cargo:
              </h2>
              <h3 className="font-roboto font-normal text-h3">
                {job}
              </h3>
            </div>
            <div className='flex justify-between mt-4'>
              <h2 className="font-roboto font-medium text-h2 ">
                Data de admissão:
              </h2>
              <h3 className="font-roboto font-normal text-h3">
                {admission_date}
              </h3>
            </div>
            <div className='flex justify-between mt-4 mb-3  '>
              <h2 className="font-roboto font-medium text-h2">
                Telefone:
              </h2>
              <h3 className="font-roboto font-normal text-h3">
                {phone}
              </h3>
            </div>
          </div>
        )
      }
    </div >
  );
}

export default Employee;