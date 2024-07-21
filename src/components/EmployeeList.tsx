import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import EmployeeProps from "../interfaces/EmployeeProps";
import Employee from "./Employee";
import { formatDate } from "../utils/dateUtils";
import { formatPhoneNumber } from "../utils/phoneUtils";
import SearchInput from "./SearchInput";

const EmployeeList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredEmployees, setFilteredEmployees] = useState<EmployeeProps[]>([]);

  const { data, isLoading, error } = useQuery<EmployeeProps[]>(
    "employees",
    async () => {
      const response = await axios.get("http://localhost:3001/employees");
      // Formata os dados antes de retorná-los
      return response.data.map((employee: EmployeeProps) => ({
        ...employee,
        admission_date: formatDate(employee.admission_date),
        phone: formatPhoneNumber(employee.phone)
      }));
    },
    {
      onError: (error) => {
        console.error("Erro ao buscar funcionários:", error);
      }
    }
  );

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    if (data) {
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        const filtered = data.filter((employee) => {
          return (
            employee.name.toLowerCase().includes(term) ||
            employee.phone.includes(term) ||
            employee.job.toLowerCase().includes(term)
          );
        });
        setFilteredEmployees(filtered);
      } else {
        setFilteredEmployees(data);
      }
    }
  }, [searchTerm, data]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro: {(error as Error).message}</div>;
  }

  return (
    <div className="pt-5">
      <div className="md:flex justify-between align-middle">
        <h1 className="h1 font-medium flex flex-col justify-center">Funcionários</h1>
        <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      </div>
      <div className="">
        {/* Header */}
        <div className="h-12 px-10 flex md:hidden items-center justify-between border-b-2 p-[14px] bg-custom-gradient text-white rounded-t-md">
          <h2 className="text-h2 font-medium w-[20%]">FOTO</h2>
          <h2 className="text-h2 font-medium w-[20%]">NOME</h2>
          <div className="w-[20%] h-10 flex items-center justify-end p-3">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="h-12 bg-custom-gradient hidden md:flex items-center justify-between border-b-2 text-white rounded-t-md px-10">
          <div className="flex items-center w-[10%]">FOTO</div>
          <div className="w-[20%]">NOME</div>
          <div className="w-[20%]">CARGO</div>
          <div className="w-[20%]">DATA DE ADMISSÃO</div>
          <div className="w-[20%]">TELEFONE</div>
        </div>

        {/* Employee List */}
        {filteredEmployees.map(employee => (
          <Employee
            key={employee.id}
            id={employee.id}
            name={employee.name}
            job={employee.job}
            admission_date={employee.admission_date}
            phone={employee.phone}
            image={employee.image}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;

