import Link from 'next/link';
import React from 'react';
import BandcampImages from '../components/BandCampImg';

const Clients = (clients) => {
  return (
    <div className="relative">
      <h1 className="flex justify-center items-center text-3xl p-2 drop-shadow-2xl">
        Recent Clients
      </h1>
      <div>
        <BandcampImages src={clients} />
      </div>
      <div className="flex justify-center items-center pt-6">
        <p className="hover:text-white-1000/70 hover:scale-110 transition-transform">
          <Link href="https://www.krisamadhi.com/clients/" target="blank">
            <button className=" px-2 md:px-8 py-2 border text-sm md:text-xl ">
              Click here for more clients
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Clients;
