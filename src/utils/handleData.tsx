import { formatDate } from './dateUtils'
import { formatPhoneNumber } from './phoneUtils'
import EmployeeProps from '../interfaces/EmployeeProps'

export const formatEmployeeData = (employees: EmployeeProps[]): EmployeeProps[] => {
  return employees.map((employee) => ({
    ...employee,
    dataDeAdmissao: formatDate(employee.admission_date),
    telefone: formatPhoneNumber(employee.phone),
  }));
};
