import React from 'react'
import Header from '../src/Header.jsx'

function Home() {
    return (
        <div>
          <Header />
          <div className="flex flex-col justify-center items-center h-screen">
            <span className="text-2xl font-semibold">Home</span>
          </div>
        </div>
    );
}

export default Home