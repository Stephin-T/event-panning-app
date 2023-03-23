import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';
import ErrorAlert from '@/components/events/error-alert';
import Comments from '@/components/input/comments';
import { getEventById , getFeaturedEvents} from '@/helpers/api-util';
import React, { Fragment } from 'react'

function EventDetailPage(props) {

    const {selectedEvent}  = props;
       const event= selectedEvent;

       if(!event) {
         return <div className='center'><h3>Loading...</h3></div>
       }

  return (
   <Fragment>
    <EventSummary title = {event.title}/>
    <EventLogistics date= {event.date} address = {event.location} image ={event.image} imageAlt={event.title} />
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
    <Comments eventId={event.id} />
   </Fragment>
  )
}

export async function getStaticProps(context){  

     const {params} = context;

     const eventid = params.eventid;
      
     const event = await getEventById(eventid);

     return {
      props: {
         selectedEvent: event
      },
      revalidate: 30
     }

}

export async function getStaticPaths(){
     const events = await getFeaturedEvents();

     const paths =  events.map(event => ({
      params : { eventid : event.id}
     }))

  return {
    paths: paths,
    fallback : true
    
  }
}

export default EventDetailPage