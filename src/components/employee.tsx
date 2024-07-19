import React from 'react'
import EmployeeProps from '../interfaces/EmployeeProps';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const Employee: React.FC<EmployeeProps> = ({ id, name, job, admissionDate, phone, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`employeeId=${id} p-5 border-b bg-white`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={image} alt={name} className="w-10 h-10 rounded-full" />
        </div>
        <div className="ml-4">
          <div className="text-lg font-medium">{name}</div>
        </div>
        <button onClick={() => setExpanded(!expanded)} >
          {<button onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <>
                <BsChevronUp className="h-6 w-6 flex items-center justify-center" />
              </>
            ) : (
              <>
                <BsChevronDown className="h-6 w-6 flex items-center justify-center" />
              </>
            )}
          </button>}
        </button>
      </div>
      {
        expanded && (
          <div className="mt-2 text-sm text-gray-500">
            <div className='flex justify-between'>
              <h2>
                Cargo:
              </h2>
              <h2>
                {job}
              </h2>
            </div>
            <div className='flex justify-between'>
              <h2>
                Data de admissão:
              </h2>
              <h2>
                {"admissionDate"}
              </h2>
            </div>
            <div className='flex justify-between'>
              <h2>
                Telefone:
              </h2>
              <h2>
                {phone}
              </h2>
            </div>
          </div>
        )
      }
    </div >
  );
}

export default Employee;