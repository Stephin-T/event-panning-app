import ErrorAlert from '@/components/events/error-alert';
import EventList from '@/components/events/EventList';
import ResultsTitle from '@/components/events/results-title';
import Button from '@/components/UI/Button';
import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

function FilteredEventsPage() {

   const router = useRouter();
   const filteredData = router.query.slug;

   if(!filteredData){
    return <p className='center'>Loading...</p>
   }

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];
       
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(numYear) || isNaN(numMonth) || numYear >2030 || numYear < 2021 || numMonth <1 || numMonth >12) {

      return <Fragment>
      <ErrorAlert><p>Invalid filter. Please adjust your values</p></ErrorAlert>
      <div className='center'>
        <Button link="/events">Show All Events</Button>
      </div>
      </Fragment>
    }
    const filteredEvents =getFilteredEvents({
      year: numYear,
      month: numMonth
    });
     if(!filteredEvents || filteredEvents.length ===0){
      return<Fragment>
      <ErrorAlert>No events found for the chosen filter.</ErrorAlert>
      <div className='center'>
        <Button link="/events">Show All Events</Button>
      </div>
      </Fragment>
     }

      const date = new Date(numYear, numMonth-1);

  return (
    <Fragment>
    <ResultsTitle  date={date}/>
    <EventList  items={filteredEvents}/>
    </Fragment>
  )
}



export default FilteredEventsPage