import React from 'react';
import EventItem from './EventItem';
import classes from "./event-list.module.css"

function EventList({ items }) {
    return (
        <div><ul className={classes.list}>
            {items.map(event =>
                <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    image={event.image}
                />
            )}
        </ul></div>
    )
}

export default EventList