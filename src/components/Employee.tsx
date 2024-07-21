// import React from 'react'
// import EmployeeProps from '../interfaces/EmployeeProps';
// import { useState } from 'react';
// import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

// const Employee: React.FC<EmployeeProps> = ({ id, name, job, admission_date, phone, image }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div className={`employeeId=${id} py-5 px-10 border-b bg-white h-15`}>
//       <div className="flex items-start justify-between align-middle border-2">
//         <div className="flex items-center border-2 w-[18%]">
//           <img src={image} alt={name} className="w-[34px] h-[34px] rounded-full " />
//         </div>
//         <div className="border-2 flex justify-start align-baseline w-[20%]">
//           <div className="h3 flex justify-start">{name}</div>
//         </div>
//         <div onClick={() => setExpanded(!expanded)} >
//           {<button onClick={() => setExpanded(!expanded)}>
//             {expanded ? (
//               <>
//                 <BsChevronUp className="h-[32px] w-[32px] flex items-center justify-center" />
//               </>
//             ) : (
//               <>
//                 <BsChevronDown className="h-[32px] w-[32px] flex items-center justify-center" />
//               </>
//             )}
//           </button>}
//         </div>
//         <div className="border-2 flex justify-start align-baseline w-[20%]">
//           <div className="h3 flex justify-start">{job}</div>
//         </div>
//         <div className="border-2 flex justify-start align-baseline w-[20%]">
//           <div className="h3 flex justify-start">{admission_date}</div>
//         </div>
//         <div className=" border-2 flex justify-start align-baseline w-[20%]">
//           <div className="h3">{phone}</div>
//         </div>
//       </div>
//       {
//         expanded && (
//           <div className="mt-2 text-sm text-gray-500">
//             <div className='flex justify-between mt-4'>
//               <h2 className="font-roboto font-medium text-h2">
//                 Cargo:
//               </h2>
//               <h3 className="font-roboto font-normal text-h3">
//                 {job}
//               </h3>
//             </div>
//             <div className='flex justify-between mt-4'>
//               <h2 className="font-roboto font-medium text-h2 ">
//                 Data de admissão:
//               </h2>
//               <h3 className="font-roboto font-normal text-h3">
//                 {admission_date}
//               </h3>
//             </div>
//             <div className='flex justify-between mt-4 mb-3  '>
//               <h2 className="font-roboto font-medium text-h2">
//                 Telefone:
//               </h2>
//               <h3 className="font-roboto font-normal text-h3">
//                 {phone}
//               </h3>
//             </div>
//           </div>
//         )
//       }
//     </div >
//   );
// }

// export default Employee;

import React, { useState } from 'react';
import EmployeeProps from '../interfaces/EmployeeProps';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const Employee: React.FC<EmployeeProps> = ({ id, name, job, admission_date, phone, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`employeeId=${id} py-5 px-10 border-b bg-white h-15`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center w-[10%]">
          <img src={image} alt={name} className="w-[34px] h-[34px] rounded-full" />
        </div>
        <div className="w-[20%]">
          <div className="h3">{name}</div>
        </div>
        <div className="hidden md:block w-[20%]">
          <div className="h3">{job}</div>
        </div>
        <div className="hidden md:block w-[20%]">
          <div className="h3">{admission_date}</div>
        </div>
        <div className="hidden md:block w-[20%]">
          <div className="h3">{phone}</div>
        </div>
        <div className="md:hidden w-[10%] flex justify-end">
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? <BsChevronUp className="h-[32px] w-[32px]" /> : <BsChevronDown className="h-[32px] w-[32px]" />}
          </button>
        </div>
      </div>
      {expanded && (
        <div className="mt-2 text-sm text-gray-500">
          <div className="flex justify-between mt-4">
            <h2 className="font-roboto font-medium text-h2">Cargo:</h2>
            <h3 className="font-roboto font-normal text-h3">{job}</h3>
          </div>
          <div className="flex justify-between mt-4">
            <h2 className="font-roboto font-medium text-h2">Data de admissão:</h2>
            <h3 className="font-roboto font-normal text-h3">{admission_date}</h3>
          </div>
          <div className="flex justify-between mt-4 mb-3">
            <h2 className="font-roboto font-medium text-h2">Telefone:</h2>
            <h3 className="font-roboto font-normal text-h3">{phone}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employee;
