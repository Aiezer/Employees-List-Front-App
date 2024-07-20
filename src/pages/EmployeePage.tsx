import React from "react";
import { useQuery } from "react-query"
import axios from "axios";
import EmployeeProps from "../interfaces/EmployeeProps";
import Employee from "../components/employee";
import { formatDate } from "../utils/dateUtils";
import { formatPhoneNumber } from "../utils/phoneUtils";

const EmployeePage: React.FC = () => {
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
      {data?.map(employee => (
        <Employee
          id={employee.id}
          name={employee.name}
          job={employee.job}
          admission_date={formatDate(employee.admission_date)}
          phone={formatPhoneNumber(employee.phone)}
          image={employee.image}
        />
      ))}
    </div>
  )
}

export default EmployeePage;
