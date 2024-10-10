import React from 'react';
import Image from 'next/image';
import logo from '@/app/images/logo.png';
import imgs from '@/app/images/hadiii.jpg';

interface CardProps {
  name: string;
  rollNo: string;
  Distancelearning: string;
  City: string;
  Center: string;
  Campus: string;
  DayTime: string;
}

const Card: React.FC<CardProps> = ({ name, rollNo, Distancelearning, City, Center, Campus, DayTime }) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-800 p-4">
        <div className="bg-white w-full max-w-[33rem] h-auto flex flex-col md:flex-row justify-between p-6 rounded-lg shadow-xl">
          
          {/* Left Section */}
          <div className="card-left text-black space-y-2">
            <Image 
              src={logo}
              alt="Logo"
              width={60}
              height={60}
              className="mb-4 mx-auto md:mx-0"
            />
            <ul className="text-center md:text-left">
              <li><strong>Name:</strong> {name}</li>
              <li><strong>Roll No:</strong> {rollNo}</li>
              <li><strong>Distance Learning:</strong> {Distancelearning}</li>
              <li><strong>City:</strong> {City}</li>
              <li><strong>Center:</strong> {Center}</li>
              <li><strong>Campus:</strong> {Campus}</li>
              <li><strong>Day/Time:</strong> {DayTime}</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="card-right mt-5 md:mt-0 text-center">
            <Image
              className="border-solid border-2 border-gray-950 rounded-xl mx-auto"
              src={imgs}
              alt="Profile Image"
              width={120}
              height={120}
            />

            {/* Signature Line */}
            <hr className="w-24 mt-24 border-t-2 border-gray-700 mx-auto" />
            <p className="mt-1 text-xs text-gray-600">Signature</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
