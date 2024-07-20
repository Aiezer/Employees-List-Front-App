import React from "react";
import { useQuery } from "react-query"
import axios from "axios";
import EmployeeProps from "../interfaces/EmployeeProps";
import Employee from "./employee";
import { formatDate } from "../utils/dateUtils";
import { formatPhoneNumber } from "../utils/phoneUtils";

const EmployeeList: React.FC = () => {
  const { data, isLoading } = useQuery<EmployeeProps[]>("employees", () => {
    console.log("entrou")
    return axios
      .get("http://localhost:3001/employees")
      .then((response) => response.data)
  })
  console.log("data", data);

  if (isLoading) {
    return (
      <div>Carregando...</div>
    )
  }
  console.log(data)

  return (
    <div className="m-5">
      <div className=" p-5">
        {/* Header */}
        <div className=" h-12 flex md:hidden items-center justify-between border-b-2 p-[14px] bg-custom-gradient from-blue-500 to-purple-500 text-white rounded-t-md">
          <h2 className="text-h2 font-medium">FOTO</h2>
          <h2 className="text-h2 font-medium">NOME</h2>
          <div className="w-10 h-10 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="bg-custom-gradient hidden md:flex items-center justify-between border-b-2 pb-2 from-blue-500 to-purple-500 text-white rounded-t-md px-10">
          <div className="w-10 h-10 flex items-center justify-center">FOTO</div>
          <div className="text-h2 font-medium">NOME</div>
          <div className="text-h2 font-medium">CARGO</div>
          <div className="text-h2 font-medium">DATA DE ADMISSÃO</div>
          <div className="text-h2 font-medium">TELEFONE</div>
        </div>

        {/* Employee List */}
        {data?.map(employee => (
          <Employee
            key={employee.id}
            id={employee.id}
            name={employee.name}
            job={employee.job}
            admission_date={formatDate(employee.admission_date)}
            phone={formatPhoneNumber(employee.phone)}
            image={employee.image}
          />
        ))}
      </div>
    </div>
  )
}

export default EmployeeList;
