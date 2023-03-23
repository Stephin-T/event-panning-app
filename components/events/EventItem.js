import Link from 'next/link';
import React from 'react';
import AddressIcon from '../icons/AddressIcon';
import ArrowRight from '../icons/ArrowRight';
import DateIcon from '../icons/DateIcon';
import Button from '../UI/Button';
import classes from "./event-item.module.css";
import Image from 'next/image';

function EventItem(props) {

    const {title, image, date, location, id} = props;

    const humanReadabledate = new Date(date).toLocaleDateString("en-US", 
    {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const formattedAddress =location.replace(", ", ("\n"));
    const exploreLink = `/events/${id}`;

  return (
    
    <li className={classes.item}>
    <Image src={"/" + image} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
            <DateIcon/>
                <time>{humanReadabledate}</time>
            </div>
            <div className={classes.address}>
            <AddressIcon/>
                <address>{formattedAddress}</address>
            </div>
        </div>
        <div className={classes.actions}>
            <Button link = {exploreLink}><span>Explore Events</span>
               <span className={classes.icon}><ArrowRight/></span>
            </Button>
        </div>
      </div>
    </li>
    
  )
}



export default EventItem