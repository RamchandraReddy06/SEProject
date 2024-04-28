import React from "react";
import Navbar from "./Navbar";
import Profile_Pic from "../images/Profile_Pic.jpeg";
import Footer from "./Footer";

const Collab = () => {
  return (
    <>
      <div >
        <Navbar />

        {/* <!-- component --> */}
        {/* <!-- This is an example component --> */}
        <div className="container mx-auto rounded-lg">
          {/* <!-- headaer --> */}
          <div className="px-3 py-3 flex justify-between items-center bg-white border-b-2">
            <div className="font-semibold text-2xl">Connect</div>
            <div className="w-1/2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
              />
            </div>
            <img
                    src={Profile_Pic}
                    className="object-cover h-12 w-12 rounded-full"
                    alt=""
                  />
          </div>
          {/* <!-- end header -->
        <!-- Chatting --> */}
          <div className="flex flex-row justify-between bg-white">
            {/* <!-- chat list --> */}
            <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
              <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
                <div className="w-1/4">
                  <img
                    src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                    className="object-cover h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div className="text-lg font-semibold">Aaryl</div>
                  <span className="text-gray-500">Busssy</span>
                </div>
              </div>
              <div className="flex flex-row py-4 px-2 items-center border-b-2">
                <div className="w-1/4">
                  <img
                    src="https://source.unsplash.com/otT2199XwI8/600x600"
                    className="object-cover h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div className="text-lg font-semibold">SE Team Project</div>
                  <span className="text-gray-500">Hi Ram, Welcome to the group</span>
                </div>
              </div>
              <div className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
                <div className="w-1/4">
                  <img
                    src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                    className="object-cover h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div className="text-lg font-semibold">Vivaldi</div>
                  <span className="text-gray-500">Thakyou</span>
                </div>
              </div>
              <div className="flex flex-row py-4 px-2 items-center border-b-2">
                <div className="w-1/4">
                  <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    className="object-cover h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div className="text-lg font-semibold">
                  Pranav
                  </div>
                  <span className="text-gray-500">
                    Football at 9:00pm
                  </span>
                </div>
              </div>
              <div className="flex flex-row py-4 px-2 items-center border-b-2">
                <div className="w-1/4">
                  <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    className="object-cover h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div className="text-lg font-semibold">
                    Mozart
                  </div>
                  <span className="text-gray-500">
                    The composition is a work of art
                  </span>
                </div>
              </div>

              <div className="flex flex-row py-4 px-2 items-center border-b-2">
                <div className="w-1/4">
                  <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    className="object-cover h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div className="text-lg font-semibold">
                  Beethoven
                  </div>
                  <span className="text-gray-500">
                    i can play better.
                  </span>
                </div>
              </div>
              <div className="flex flex-row py-4 px-2 items-center border-b-2">
                <div className="w-1/4">
                  <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    className="object-cover h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div className="text-lg font-semibold">
                    Bach
                  </div>
                  <span className="text-gray-500">
                    I'd love to work with you on ur next piece.
                  </span>
                </div>
              </div>
              
              {/* <!-- end user list --> */}
            </div>
            {/* <!-- end chat list -->
        <!-- message --> */}
            <div className="w-full px-5 flex flex-col justify-between">
              <div className="flex flex-col mt-5">
                <div className="flex justify-end mb-4">
                  <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                    {/* Welcome to group everyone ! */}
                  </div>
                  <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                  />
                </div>
                <div className="flex justify-start mb-4">
                  <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                  />
                  <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat at praesentium, aut ullam delectus odio error sit
                    rem. Architecto nulla doloribus laborum illo rem enim dolor
                    odio saepe, consequatur quas?
                  </div>
                </div>
                <div className="flex justify-end mb-4">
                  <div>
                    <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Magnam, repudiandae.
                    </div>

                    <div className="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis, reiciendis!
                    </div>
                  </div>
                  <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                  />
                </div>
                <div className="flex justify-start mb-4">
                  <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                  />
                  <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                    happy Hunting!
                  </div>
                </div>
              </div>
              <div className="py-5">
                <input
                  className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                  type="text"
                  placeholder="Type Your Message Here..."
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  );
};

export default Collab;
