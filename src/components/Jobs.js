import React from "react";
import "../index.css";
import Navbar from "./Navbar";

const Jobs = () => {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <section className="container px-4 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-x-3">
              <h6 className="text-2xl font-bold text-gray-800 dark:text-white">
                Jobs
              </h6>
            </div>
          </div>
        </div>

        <div className="inline-flex overflow-hidden bg-white rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700 gap-x-3.5">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                View All
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                ></svg>
              </button>
            </div>
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Job Type
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  On-Campus
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Off-Campus
                </a>
              </div>
            </div>
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Job Location
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  On-Campus
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Off-Campus
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center mt-4 md:mt-0">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>

          <input
            type="text"
            placeholder="Search"
            className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-leftrtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Company
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-leftrtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Role
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-leftrtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Type
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-leftrtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Location
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-leftrtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Positions Available
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <a
                            className="font-medium text-gray-800 dark:text-white"
                            href="https://careers.abbvie.com/en"
                            target="_blank"
                          >
                            <u>AbbVie</u>
                          </a>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="inline px-3 py-1 text-sm font-normal rounded-full dark:text-gray-500 gap-x-2 dark:bg-gray-800">
                          Principle Research Scientist 1
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                          Full-Time
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <a
                            className="text-gray-700 dark:text-gray-200"
                            href="https://www.google.com/maps/dir/41.8250752,-87.6118016/Abbott+Park+Rd,+Lake+Bluff,+IL/@42.0626101,-88.0331878,10z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x880f93821b047097:0x2f20e0626089145d!2m2!1d-87.8944668!2d42.3008372!3e0"
                            target="_blank"
                          >
                            Waukegan, Illinois
                          </a>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            5
                          </h4>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <a
                            className="font-medium text-gray-800 dark:text-white"
                            href="https://careers.google.com"
                            target="_blank"
                          >
                            <u>Google</u>
                          </a>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="inline px-3 py-1 text-sm font-normal rounded-full dark:text-gray-500 gap-x-2 dark:bg-gray-800">
                          Software Development Engineer II
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="inline px-3 py-1 text-sm font-normal text-emerald-500 bg-emerald-100/60 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">
                          Full-Time
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            Remote
                          </h4>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            10
                          </h4>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <a
                            className="font-medium text-gray-800 dark:text-white"
                            href="https://www.iit.edu/hr/careers"
                            target="_blank"
                          >
                            <u>Illinois Tech MTCC Commons</u>
                          </a>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="inline px-3 py-1 text-sm font-normal rounded-full dark:text-gray-500 gap-x-2 dark:bg-gray-800">
                          Food Service
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-gray-500 gap-x-2 bg-gray-100 dark:bg-gray-800">
                          Part-Time
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <a
                            className="text-gray-700 dark:text-gray-200"
                            href="https://www.google.com/maps/dir/41.8250752,-87.6118016/McCormick+Tribune+Campus+Center,+3201+S+State+St,+Chicago,+IL+60616/@41.8293508,-87.6257505,15.93z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x880e2c0d2b228d5b:0xb312938ee22ce81d!2m2!1d-87.6258095!2d41.8351397!3e0"
                            target="_blank"
                          >
                            Chicago, Illinois
                          </a>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            4
                          </h4>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <a
                            className="font-medium text-gray-800 dark:text-white"
                            href="https://jobs.sap.com"
                            target="_blank"
                          >
                            <u>SAP</u>
                          </a>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="inline px-3 py-1 text-sm font-normal rounded-full dark:text-gray-500 gap-x-2 dark:bg-gray-800">
                          ABAP Developer
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="inline px-3 py-1 text-sm font-normal text-emerald-500 bg-emerald-100/60 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">
                          Full-Time
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <a
                            className="text-gray-700 dark:text-gray-200"
                            href="https://www.google.com/maps/dir/41.8335736,-87.6119545/SAP+Labs+(Building+1),+3410+Hillview+Ave,+Palo+Alto,+CA+94304/@39.1495625,-115.6066064,5z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x808fba9dd56e51d9:0xbdac82f84b5f44ba!2m2!1d-122.1465488!2d37.3988271!3e0"
                            target="_blank"
                          >
                            Palo Alto, California
                          </a>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            5
                          </h4>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <a
                            className="font-medium text-gray-800 dark:text-white"
                            href="https://www.salesforce.com/company/careers/"
                            target="_blank"
                          >
                            <u>Salesforce</u>
                          </a>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="inline px-3 py-1 text-sm font-normal rounded-full dark:text-gray-500 gap-x-2 dark:bg-gray-800">
                          Salesforce Technical Architect
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                          Full-Time
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            Remote
                          </h4>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            2
                          </h4>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
