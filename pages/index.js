import EventList from '@/components/events/EventList';
import { getFeaturedEvents} from '@/helpers/api-util';
import React from 'react';
import Head from 'next/head';
import NewsletterRegistration from '@/components/input/newsletter-registration';


function StartingPage(props) {


  return (
    <div>
       <Head>
        <title>SML Events</title>
        <meta name="description" content="Thie is our website love u  lot...."/>
       </Head>
       <NewsletterRegistration />
      <EventList items={props.events} />
    
    </div>
  )
}

export async function getStaticProps(){

     const featuredEvents = await getFeaturedEvents();

     return {
      props: {
        events:featuredEvents
      },
      revalidate : 1700 // secs
     }
}

export default StartingPage