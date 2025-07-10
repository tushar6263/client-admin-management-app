import React, { useEffect, useState } from 'react';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Replace with API call
    setClients([
      {
        id: 1,
        name: "John Doe",
        designation: "CEO",
        description: "Excellent collaboration",
        image: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
      }
    ]);
  }, []);

  return (
      <section id="clients" className="py-16 px-6 ">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Happy Clients</h2>
      <div  className='flex items-center justify-center gap-6'>
      <div className="flex flex-wrap justify-center gap-6">
        {clients.map(c => (
          <div key={c.id} className="w-full md:w-72 bg-white p-4 rounded shadow text-center">
            <img src={c.image} alt={c.name} className="w-20 h-20 object-cover mx-auto rounded-full mb-4" />
            <p className="text-gray-600 italic mb-2">"{c.description}"</p>
            <h4 className="text-lg font-semibold">{c.name}</h4>
            <p className="text-sm text-gray-500">{c.designation}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {clients.map(c => (
          <div key={c.id} className="w-full md:w-72 bg-white p-4 rounded shadow text-center">
            <img src={c.image} alt={c.name} className="w-20 h-20 object-cover mx-auto rounded-full mb-4" />
            <p className="text-gray-600 italic mb-2">"{c.description}"</p>
            <h4 className="text-lg font-semibold">{c.name}</h4>
            <p className="text-sm text-gray-500">{c.designation}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {clients.map(c => (
          <div key={c.id} className="w-full md:w-72 bg-white p-4 rounded shadow text-center">
            <img src={c.image} alt={c.name} className="w-20 h-20 object-cover mx-auto rounded-full mb-4" />
            <p className="text-gray-600 italic mb-2">"{c.description}"</p>
            <h4 className="text-lg font-semibold">{c.name}</h4>
            <p className="text-sm text-gray-500">{c.designation}</p>
          </div>
        ))}
      </div>
      </div>
      
    </section>
  );
};

export default Clients;
