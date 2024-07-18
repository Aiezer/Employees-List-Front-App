import React from "react"

const Header: React.FC = () => {
  return (
    <header className="bg-white h-[60px] shadow-md shadow-gray-20">
      <img src="/images/logo.png" alt="Logo" className="h-full object-contain" />
    </header>
  )
}

export default Header;