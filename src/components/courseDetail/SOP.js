import React from 'react'
import Navbar from '../Navbar'

const SOP = () => {
  return (
    <div>
      <Navbar/>

      <div class="px-6 py-4">

<h1 class="py-2 text-gray-700 dark:text-gray-4">
Science of Programming
</h1>


<p class="py-2 text-gray-700 dark:text-gray-4">
James Sasaki
</p>

<div class="flex items-center mt-4 text-gray-700 dark:text-gray-2">
  <svg
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
    />
  </svg>
  <h1 class="px-2 text-sm">GPA: 4</h1>
</div>

<div class="flex items-center mt-4 text-gray-700 dark:text-gray-2">
  <svg
    aria-label="suitcase icon"
    class="w-6 h-6 fill-current"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14 11H10V13H14V11Z" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
    />
  </svg>

  <h1 class="px-2 text-sm">Grades: 45/50</h1>
</div>
<div class="flex items-center mt-4 text-gray-700 dark:text-gray-2">
<svg class="h-6 w-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
  <a href='mailto:profsop@iit.edu' class="px-2 text-sm text-gray-700">Connect with Professor</a>
</div>
<div class="flex items-center mt-4 text-gray-700 dark:text-gray-2">
<svg class="h-6 w-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
  <a href='mailto:tasop@iit.edu' class="px-2 text-sm text-gray-700">Connect with TA</a>
</div>
</div>

    </div>
  )
}

export default SOP