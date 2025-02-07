
<<<<<<< HEAD

import { Hero } from "./components/hero";
import { Footer } from "./components/footer";
import { NaVbar } from "./components/nav";


=======
import { NavBar } from "./components/navbar";

import { Footer } from "./components/footer";
import { client } from "@/sanity/lib/client";
import React from "react";
import Hero from "./components/hero";
>>>>>>> 5bef5c62bdafe7841f4a0228e7412ce84ea499f8






const Home = async() => {
const query = `*[_type == 'blog'] | order(_updateAt asc){
  Title,Paragraph,image, "slug":slug.current
}`

const data:Blog[] = await client.fetch(query)
console .log (data)
  
  
  return ( 
    <div>
<<<<<<< HEAD
      <NaVbar />
      <Hero />
     
=======
      <NavBar />


      { data.map((data:Blog)=>(
        <Hero data={data} key={data.slug}/>
      ))

      }
      
>>>>>>> 5bef5c62bdafe7841f4a0228e7412ce84ea499f8
      <Footer />

    </div>
  );
}

export default Home
