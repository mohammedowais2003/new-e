
import { NavBar } from "./components/navbar";

import { Footer } from "./components/footer";
import { client } from "@/sanity/lib/client";
import React from "react";
import Hero from "./components/hero";






const Home = async() => {
const query = `*[_type == 'blog'] | order(_updateAt asc){
  Title,Paragraph,image, "slug":slug.current
}`

const data:Blog[] = await client.fetch(query)
console .log (data)
  
  
  return ( 
    <div>
      <NavBar />


      { data.map((data:Blog)=>(
        <Hero data={data} key={data.slug}/>
      ))

      }
      
      <Footer />

    </div>
  );
}

export default Home
