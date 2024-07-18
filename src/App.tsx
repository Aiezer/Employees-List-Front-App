import React from "react"
import EmployeeList from "./pages/EmployeeList"

const App: React.FC = () => {
  return (
    <div>
      <EmployeeList />
    </div>
  )
}

export default App
// import React from 'react';
// import { useQuery } from 'react-query';

// const fetchData = async () => {
//   const response = await fetch('https://http://localhost:3001/employees');
//   return response.json();
// }

// const App: React.FC = () => {
//   const { data, error, isLoading } = useQuery('employees', fetchData);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>Todo Item</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

// export default App;