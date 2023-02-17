import Image from 'next/image'
import styles from '@/styles/card.module.css'
import card_event from "../assets/card_event.png"
import calender from "../assets/calender.png"
import ticket from "../assets/ticket.png"
import age from "../assets/age.png"
import timing from "../assets/timing.png"


const EventCard = ({ event }) => {
    return (
        <div className={styles.card_container}>
            <div className={styles.imageWrapper}>
                <Image
                    src={card_event}
                    width={333}
                    height={414}
                    alt={event.name}
                />
                <div className={styles.date}>
                    <Image
                        src={calender}
                        width={12}
                        height={12}
                        alt={event.name}
                    />
                    Date: {event.date}
                </div>
            </div>

            <div className={styles.details}>

                <h2 className={styles.title}>{event.name}</h2>
                <p className={styles.description}>{event.description}</p>
                <p className={styles.Tickets}>
                    <Image
                        src={ticket}
                        width={14}
                        height={14}
                        alt={event.name}
                    />

                    Tickets: ${event['ticket-price']}
                </p>
                <div className={styles.card_footer}>
                    <p className={styles.age}>
                        <Image
                            src={age}
                            width={14}
                            height={14}
                            alt={event.name}
                        />
                        Ages: {event.age_group}
                    </p>
                    <p className={styles.timing}>
                        <Image
                            src={timing}
                            width={14}
                            height={14}
                            alt={event.name}
                        />
                        Timing: {event.timing.join(', ')}</p>
                </div>
                <div>
                    <button className={styles.event_status} >{event.status}</button>
                </div>
            </div>

        </div>
    )
}

export default EventCard;