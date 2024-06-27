import React from "react";
const Tailwind = () => {

return(<>
<section class="bg-sky-700">
<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Email</span>
    <input type="email" class="peer ..."/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>
</form>
</section>
   
</>);

}
export default Tailwind;
