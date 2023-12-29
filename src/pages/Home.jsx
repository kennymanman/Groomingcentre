
import Nav from "../components/Nav"
import Homevideo from "../videos/Homevideo.mp4"
import child from "../images/child.jpg"
import secondsection from "../images/secondsection.jpg"
import { PiPackageFill } from "react-icons/pi";

import { SlWallet } from "react-icons/sl";
import { BsPersonBadge } from "react-icons/bs";
import Footer from "../components/Footer"



export default function Home() {
  return (
    <>

    <div className="h-screen relative  ">


   
  

  <video autoPlay muted loop className="absolute w-full h-full object-cover " src={Homevideo} alt="" />

  <Nav/>





<div className=" px-5 relative  mt-96 ">
<h1 className=" text-white tracking-tighter text-2xl  ">Award winning NGO</h1>
<h1 className=" text-white tracking-tighter text-5xl ">Servicing the grassroots & backbone of society.</h1>
<button className="rounded-full border-2 mt-2 border-white tracking-tighter text-white px-4 text-xl hover:bg-white hover:text-black">our solutions</button>
</div>

</div>




<div className="bg-amber-50 p-10">


  <div className="grid grid-cols-2 gap-3 mt-4 ">


    <div className="col-span-1 relative h-96 ">

      <img className="object-cover absolute h-full w-full rounded-xl" src={secondsection} alt=""  />

    <h2 className="text-5xl tracking-tighter  relative p-2 text-white">Bringing opportunities to your doorstep.</h2>

    </div>


    <div className="col-span-1">
    <p className="tracking-tighter text-2xl mt-5 ">The Grooming Centre is a Non-Governmental Organization with a primary aim to address the near absence of financial services to the large population of people engaged in small trading and micro productive activities in many parts in Nigeria.We are committed to promoting financial inclusion and empowering our members through the creation of innovative microproducts that changes lives. </p>
<button className="bg-black px-5 rounded-full text-white tracking-tighter mt-4 py-1">View our impact</button>

</div>

  </div>




  <div className="grid grid-cols-2 mt-24 gap-2">

    <div className="col-span-1">
      <p className="text-5xl tracking-tighter">Driven by a simple mission to impact the lives of many people.</p>
    
    </div>


    <div className="col-span-1">

      <p className="tracking-tighter text-3xl">Solutions for small & growing businesses</p>
      <p className="tracking-tighter text-base mt-3 text-slate-500">Helping the upcoming business market to grow </p>
      <hr className="border-black my-5"/>


      <p className="tracking-tighter text-3xl">Commercial Loans</p>
      <p className="tracking-tighter text-base mt-3 text-slate-500">Helping the upcoming business market to grow </p>
      <hr className="border-black my-5"/>


      <p className="tracking-tighter text-3xl">Micro Savings for Members</p>
      <p className="tracking-tighter text-base mt-3 text-slate-500">Helping the upcoming business market to grow </p>
      <hr className="border-black my-5"/>
    </div>

  </div>






  <div className="grid grid-cols-4  gap-x-2  mt-14  ">

    <div className="col-span-1 rounded-xl bg-purple-600 p-2   h-fit ">

      <p className="tracking-tighter text-3xl ">Our Products</p>

      <p className="tracking-tighter mb-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <img className="rounded-xl" src={child} alt="" />

      <button className="px-5 bg-white rounded-full tracking-tighter mt-3 hover:bg-lime-400">see more</button>

    </div>




    <div className="col-span-1 rounded-xl bg-green-600 p-2  h-fit ">

<p className="tracking-tighter text-3xl ">Gallery</p>

<p className="tracking-tighter mb-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

<img className="rounded-xl" src={child} alt="" />

<button className="px-5 bg-white rounded-full tracking-tighter mt-3 hover:bg-lime-400">see more</button>

</div>





<div className="col-span-1 rounded-xl bg-orange-600 p-2  h-fit ">

<p className="tracking-tighter text-3xl ">Our Services</p>

<p className="tracking-tighter mb-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

<img className="rounded-xl" src={child} alt="" />

<button className="px-5 bg-white rounded-full tracking-tighter mt-3 hover:bg-lime-400">see more</button>

</div>





<div className="col-span-1 rounded-xl bg-blue-300 p-2  h-fit ">

<p className="tracking-tighter text-3xl ">The Team</p>

<p className="tracking-tighter mb-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

<img className="rounded-xl" src={child} alt="" />

<button className="px-5 bg-white rounded-full tracking-tighter mt-3 hover:bg-lime-400">see more</button>

</div>


  </div>





  <h2 className="text-5xl tracking-tighter mt-20">Our Application Process</h2>
<p className="tracking-tighter mt-2 text-xl text-slate-500">A quick & transparent process.</p>


<div className="grid grid-cols-3 gap-2 mt-20">

  <div className="col-span-1 bg-white rounded-xl p-2 h-fit">
    <p className="text-xl tracking-tighter">Step One</p>
    <div className="grid place-items-center">
    <PiPackageFill className="h-40 w-40 mt-20 " />
    </div>
    <p className="text-3xl tracking-tighter mt-4 ">Choose a Package</p>
    <p className="tracking-tighter text-lg text-slate-500 mt-3">Choose a customized loan package based on the amount of cash your business needs over a term length.</p>
  </div>



  <div className="col-span-1 bg-white rounded-xl p-2 h-fit">
    
    <p className="text-xl tracking-tighter">Step Two</p>
    

    <div className="grid place-items-center">
    <BsPersonBadge   className="h-40 w-40 mt-20 " />
    </div>
    <p className="text-3xl tracking-tighter mt-4">
Speak to our Agent</p>
    <p className="tracking-tighter text-lg text-slate-500 mt-3">Speak to our agent for financial advisory benefits and for excellent decision making for your loan tenure </p>
  </div>



  <div className="col-span-1 bg-white rounded-xl p-2 h-fit">
    <p className="text-xl tracking-tighter">Step Three</p>
    <div className="grid place-items-center">
    <SlWallet className="h-36 w-36 mt-20 " />
    </div>
    <p className="text-3xl tracking-tighter mt-7"> Get Funding Fast</p>
    <p className="tracking-tighter text-lg text-slate-500 mt-3">Get instant credit upon review and approval of your application request by our credit officer.</p>
  </div>

</div>



<h2 className="text-5xl tracking-tighter mt-20">Key Stats</h2>
<p className="tracking-tighter mt-2 text-xl text-slate-500">Our value and time in one place.</p>


<div className="flex flex-row mt-20 justify-between">

  <div>
    <p className="text-7xl tracking-tighter">16+</p>
    <p className="tracking-tighter text-xl text-slate-500">years in existence.</p>
  </div>



  <div>
    <p className="text-7xl tracking-tighter">650k+</p>
    <p className="tracking-tighter text-xl text-slate-500">Active Loanees.</p>
  </div>



  <div>
    <p className="text-7xl tracking-tighter">699k+</p>
    <p className="tracking-tighter text-xl text-slate-500">Members.</p>
  </div>


  <div>
    <p className="text-7xl tracking-tighter">603</p>
    <p className="tracking-tighter text-xl text-slate-500">Branches.</p>
  </div>


</div>










<h2 className="text-5xl tracking-tighter mt-36 text-center">Gallery</h2>
<p className="tracking-tighter mt-2 text-xl text-slate-500 text-center">Our value and time in one place.</p>

<div className="mx-10">

  <div className="grid grid-cols-3 gap-2 ">

    <div className="col-span-1   ">

      <img className="rounded-xl object-cover my-2 hover:rounded-full" src={"https://images.unsplash.com/photo-1536337005238-94b997371b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"} alt="" />
      <img className="rounded-xl object-cover my-2 hover:rounded-full" src={"https://images.unsplash.com/photo-1581465268300-73d71f4b36f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFnb3MlMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"} alt="" />

    </div>



    <div className="col-span-1 ">

<img className="rounded-xl object-cover my-2 hover:rounded-full" src={"https://plus.unsplash.com/premium_photo-1701173485514-1ef5b3d0a8af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFnb3MlMjBtYXJrZXR8ZW58MHwwfDB8fHww"} alt="" />
<img className="rounded-xl object-cover my-2 hover:rounded-full" src={"https://images.unsplash.com/photo-1487646709898-58d3c6e8d886?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGxhZ29zJTIwbWFya2V0fGVufDB8fDB8fHww"} alt="" />

</div>



<div className="col-span-1  ">

<img className="rounded-xl h-full object-cover " src={"https://plus.unsplash.com/premium_photo-1702634273888-1999beb6120b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFnb3MlMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"} alt="" />

</div>



  </div>

</div>

<div className="text-center">
  <button className="px-5 rounded-full bg-black text-white tracking-tighter py-1 mt-7 hover:bg-white hover:text-black">View our gallery</button>
</div>



<h2 className="text-5xl tracking-tighter mt-20">Latest News</h2>
<p className="tracking-tighter mt-2 text-xl text-slate-500 mb-5">Our value and time in one place.</p>


<hr className="border-black"/>
<div className="flex justify-between my-5">
<h2 className="text-4xl tracking-tighter">Award for the best NGO Lagos 2022</h2>
<button className="bg-black tracking-tighter text-white rounded-full px-5">See More</button>
</div>


<hr className="border-black"/>
<div className="flex justify-between my-5">
<h2 className="text-4xl tracking-tighter">Award for the best NGO Lagos 2022</h2>
<button className="bg-black tracking-tighter text-white rounded-full px-5">See More</button>
</div>


<hr className="border-black"/>
<div className="flex justify-between my-5">
<h2 className="text-4xl tracking-tighter">Award for the best NGO Lagos 2022</h2>
<button className="bg-black tracking-tighter text-white rounded-full px-5">See More</button>
</div>

{/* End of padded div */}
</div>






<div className="bg-purple-400 h-96 mt-4 m-3 px-5">

  <p className="text-6xl tracking-tighter pt-3">Subscribe to our latest news<br/>and updates.</p>


  <div className="flex justify-between mt-36">

<div>
<p className="text-2xl tracking-tighter">Subscribe</p>
<input className="bg-transparent tracking-tighter text-5xl text-black border-b-2 border-black placeholder:text-black" placeholder="Email" />
</div>

<button className="border-black rounded-full px-6 tracking-tighter border text-xl hover:bg-black hover:text-white">Submit</button>
</div>

</div>






   <Footer/> 
   


    </>
  )
}



