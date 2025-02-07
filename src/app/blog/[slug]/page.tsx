import Image from "next/image";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { client } from "@/sanity/lib/client";


export default async function page({params:{slug}}:{params:{slug:string}}) {

const query = `*[_type == 'blog' && slug.current == "${slug}"]{Title,Paragraph, image , block}[0]`

const data:Blog[] = await client.fetch(query)





  return (

<div>
<NavBar/>
<article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8 bg-white text-black">
    {/* Blog Title */}
    <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-black">
        
    </h1>
    {/* Featured Image */}
    <Image
        src="/op.png"
        width={400}
        height={500}
        alt="AI for everyone"
        className="rounded" />
    {/* Blog Summary Section */}
    <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
            {}
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-black/80">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, sapiente. Officiis earum sit amet
            repellendus at sint dolorem eveniet eaque ipsa laborum impedit ab
            molestias ipsum, similique, officia quae dolore.
        </p>
    </section>
    {/* Author Section (Image & Bio) */}
    <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
            src={"/op.png"}
            width={200}
            height={200}
            alt="author"
            className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24" />
        <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-black">EmAar</h3>
            <p className="italic text-xs xs:text-sm sm:text-base text-black/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veniam Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ullam a libero recusandae quasi? Vero sapiente, iure id nihil quam maxime
                fuga aspernatur tempora placeat ad pariatur vitae architecto iste saepe.
            </p>
        </div>
    </section>

    {/* Main Body of Blog */}
    <p className="text-lg leading-normal text-black">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatem
        animi porro velit ipsum asperiores, facilis modi illo
        delectus repudiandae inventore quibusdam labore? Voluptatibus ipsa error dignissimos, incidunt vel necessitatibus.
    </p>
</article>
<Footer/>
          </div>
        
        
  );
};
