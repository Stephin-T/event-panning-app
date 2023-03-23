import EventList from '@/components/events/EventList';
import EventsSearch from '@/components/events/EventsSearch';
import { getAllEvents } from '@/helpers/api-util';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';



function EventsPage(props) {
  
   const router=useRouter();
   const {events} = props;


  function findEventsSearchHandler(year, month){
      const fullPath =`/events/${year}/${month}`;
        router.push(fullPath);
  }
  return (
    <Fragment>
    <EventsSearch  onSearch ={findEventsSearchHandler}/>
    <EventList items={events}/>
    </Fragment>
  )
}
 
export async function getStaticProps(){
     const events = await getAllEvents();

     return {
      props:{
        events : events
      },
      revalidate: 60
     }
}
export default EventsPage