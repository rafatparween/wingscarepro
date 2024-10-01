"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter
function Printersearch() {
    const router = useRouter(); // Initialize the router

  const handleNextClick = () => {
    router.push('/components/setup'); // Change '/next-page' to your desired route
  };
  return (
    <div className="h-[530px] mt-[80px]">
      <section 
        className="flex flex-col justify-center items-center text-center py-12 relative bg-cover bg-center  h-[530px]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwbGFwdG9wfGVufDB8fDB8fHww')" // Replace with actual path of the background image
        }}
      >
        {/* Blue overlay (optional if you want a transparent blue effect) */}
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>

        {/* Main content */}
        <div className="relative z-10 text-white 2xl:mt-[220px] 2xl:ml-[-442px]">
          <h1 className="text-4xl font-bold text-[44px] 2xl:ml-[-258px]">Set up your Printer</h1>
          <p className="mt-4 text-lg text-[24px]">Enter your printer name and model number to get the right drivers for your printer.</p>

          {/* Input Section */}
          <div className="mt-8 flex space-x-4 justify-center">
            <input
              type="text"
              placeholder="Enter your product name here. For example: 'OfficeJet 9010'"
              className="px-4 py-2 w-full max-w-lg rounded-md text-gray-700 2xl:ml-[-19px]"
            />
            <button 
              onClick={handleNextClick} // Attach the click handler
              className="bg-gray-300 text-gray-900 px-6 py-2 rounded-md w-[100px] h-[48px]"
            >
              Next
            </button>
          </div>
        </div>

        {/* Printer and Devices Image */}
        <div className="relative z-10 mt-12">
          <img
            src="https://wingscarepro.com/setup/resources/assets/img/defaultPrinterSetup.png"  // Replace with actual path
            alt="Printer setup devices"
            width={350}
            height={196}
            className="object-contain 2xl:ml-[751px]"
          />
        </div>
      </section>
        <h1 className="text-[18px] w-[832px] h-[51px] ml-[369px] mt-[100px]">Install Smart driver and drivers on each mobile device or computer that you want to print from. Add the printer on the new device.</h1>
        <h1 className="mt-[30px] ml-[369px]">Need additional help with set-up? Visit <span className="text-[#007DBA]">Support</span></h1>
      
    </div>
  );
}
export default Printersearch;