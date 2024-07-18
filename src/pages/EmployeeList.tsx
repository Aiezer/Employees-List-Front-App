import React from "react";
import { useQuery } from "react-query"
import axios from "axios";
import EmployeeProps from "../interfaces/EmployeeProps";

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
    <div>
      {data?.map(employee => (
        <div key={employee.id}>
          <p>Name: {employee.name}</p>
          <p>Position: {employee.job}</p>
          <p>Hire Date: {employee.admissionDate}</p>
          <p>Phone: {employee.phone}</p>
          <img src={employee.image} alt={`${employee.name}'s photo`} />
        </div>
      ))}
    </div>
  )
}

export default EmployeeList;
