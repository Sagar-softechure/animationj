import React from "react";
import user from  '../assets/images/banner-front-img.png'
const Tailwind = () => {

return(<>
<section className="pt-12 bg-blue-800">
  <button class="bg-violet-500 rounded-xl items-center px-4 hover:bg-violet-300">
    Save changes
  </button>
  <ul role="list" class="p-6 divide-x divide-slate-200 flex flex-col space-y-4 items-center w-fit">
    <li class="flex py-4 first:pt-0 last:pb-0 bg-white px-4 odd:bg-red-300">
      <img class="h-10 w-10 rounded-full" src={user} alt="" />
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-slate-900">person.name</p>
        <p class="text-sm text-slate-500 truncate empty:h-4 empty:w-4 empty:bg-red-500"></p>
      </div>
    </li>
    <li class="group/item hover:bg-slate-100 ...">
      <img className="h-10 w-10 rounded-full" src={user} alt="" />
      <div>
        <a href="{person.url}">person.name</a>
        <p>person.title</p>
      </div>
      <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href="tel:{person.phone}">
        <span class="group-hover/edit:text-gray-700 ...">Call</span>
        <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
        </svg>
      </a>
    </li>


    <li class="flex py-4 first:pt-0 last:pb-0 bg-white px-4">
      <img class="h-10 w-10 rounded-full" src={user} alt="" />
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-slate-900">person.name</p>
        <p class="text-sm text-slate-500 truncate">person.email</p>
      </div>
    </li>
    <li class="flex py-4 first:pt-0 last:pb-0 bg-white px-4">
      <img class="h-10 w-10 rounded-full" src={user} alt="" />
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-slate-900">person.name</p>
        <p class="text-sm text-slate-500 truncate">person.email</p>
      </div>
    </li>
    
    
</ul>
</section>
   
</>);

}
export default Tailwind;
