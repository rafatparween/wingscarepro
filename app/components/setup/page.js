"use client"; // This should be at the top of the file

import Image from 'next/image'; // Import from next/image
import Store from '../store';

function Printersearch() {
  return (
    <>
    <div className="h-[530px] mt-[80px]">
      <section 
        className="flex flex-col justify-center items-center text-center py-12 relative bg-cover bg-center h-[530px]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwbGFwdG9wfGVufDB8fDB8fHww')" // Replace with actual path of the background image
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>

        {/* Main content */}
        <div className="relative z-10 text-white 2xl:mt-[-62px] 2xl:ml-[-442px] ">
          <h1 className="text-[54px] font-semibold text-center mb-4">Complete setup using Professionals Help</h1>
          <div className="border-t border-white w-[1100px] mx-auto mb-8"></div>
  
          {/* Main Content Section */}
          <div className="flex justify-between items-center">
            {/* Left Side: Text and Steps */}
            <div className="space-y-4 2xl:ml-[84px] 2xl:mt-[-110px]">
              {/* Step 1 */}
              <div className="flex items-start space-x-3 ml-[500px]"> 
                <span className="text-5xl font-bold w-[42px] h-[40]">1</span>
                <p className="text-[28px] mt-2">Make sure that your printer is powered on</p>
              </div>
              {/* Step 2 */}
              <div className="flex items-start space-x-3 ml-[500px]">
                <span className="text-5xl font-bold w-[42px] h-[40px]">2</span>
                <p className="text-[28px] mt-2">Complete guide for your printer</p>
              </div>
              <button className="mt-8 bg-white w-[210px] h-[48px] text-blue-700 py-2 px-6 rounded-lg font-bold shadow-md hover:bg-gray-100 transition duration-300 2xl:ml-[251px]">
                Install Printer Driver
            </button>
            </div>

            {/* Printer and Devices Image */}
            <div className="relative z-10 mt-12">
              <img
                src="https://wingscarepro.com/setup/resources/printer_images/OTHER-PRINTERS/290x245.png"  // Replace with actual path
                alt="Printer setup devices"
                width={230}
                height={252}
                className="object-contain 2xl:ml-[751px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional content */}
    </div>
    <Store/>
    </>
  );
}

export default Printersearch;
