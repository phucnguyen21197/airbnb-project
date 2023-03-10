import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from 'next/router'
import {format} from "date-fns";
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';


function Search({searchResults}) {
    console.log(searchResults);


    const router = useRouter();
    // ES6 Destructuring
    const {location,startDate,endDate,noOfGuests} = router.query;
    console.log(router.query);

    const formattedStartDate = format(new Date(startDate),"dd MMMM yy")
    const formattedEndDate = format(new Date(endDate),"dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`



  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuests} guests `}/>
        

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ stays - {range} for {noOfGuests} guests</p>
                <h1 clasname = "text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-500 whitespace-nowrap'>
                    <p className="button">
                        Cancellation Flexiblity
                    </p>
                    <p className="button">
                        Type of Place
                    </p>
                    <p className="button">
                        Price
                    </p>
                    <p className="button">
                        Room and Beds
                    </p>
                    <p className="button">
                        More filter
                    </p>
                </div>

                <div className='flex flex-col'>
                {searchResults.map(
                    ({img, location, title, description,star,price,total}
                    ) => (
                    <InfoCard 
                        key ={img}
                        img={img}
                        location={location}
                        title={title}
                        description={description}
                        star={star}
                        price={price}
                        total={total}
                    />
                    )
                )}
                </div>
                
            </section>

            <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                <Map searchResults ={searchResults}/>
            </section>
        </main>
        
        <Footer/>
    </div>
  )
}

export default Search

export async function getServerSideProps(){
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").
    then(res => res.json());

    return {
        props:{
            searchResults,

        }
    }
}