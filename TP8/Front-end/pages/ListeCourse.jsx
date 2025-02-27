import React from 'react'

function ListeCourse() {
  return (
    <div>
    <Header />
    <div className="flex flex-col justify-center items-center h-screen">
      <span className="text-2xl font-semibold">Nourriture</span>
      <span className="text-2xl font-semibold">Autres choses pour les courses</span>
    </div>
    {
        localStorage.getItem('accessToken') && 
        <input type="checkbox" />     
    }
  </div>
  )
}

export default ListeCourse