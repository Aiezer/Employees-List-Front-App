import React from 'react'
import EmployeeProps from '../interfaces/EmployeeProps';


const Employee: React.FC<EmployeeProps> = ({ id, name, job, admissionDate, phone, image }) => {
  return (
    <div>
      {name}
    </div>
  )
}

export default Employee;