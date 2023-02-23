import Image from 'next/image'
import styles from '@/styles/card.module.css'
import card_event from "../assets/card_event.png"
import calender from "../assets/calender.png"
import ticket from "../assets/ticket.png"
import age from "../assets/age.png"
import sold_out from "../assets/sold_out.png"
import cancelled from "../assets/cancelled.png"
import timing from "../assets/timing.png"


const EventCard = ({ event }) => {

    const getEventStatus = () => {
        switch (event.status) {
            case "sold out":
                return styles.soldButton;
            case "Book Tickets":
                return styles.bookButton;
            case "Private Event":
                return styles.privateButton;
            case "cancelled":
                return styles.cancelled;
            default:
                return styles.defaultButton
        }
    }

    return (
        <div className={styles.card_container}>
            <div className={styles.imageWrapper}>
                <div className={styles.image}>
                    {event.status == 'sold out' || event.status == 'cancelled' ? (

                        <div>
                            {event.status == 'sold out' ? (
                                <div >
                                    <Image
                                        src={sold_out}
                                        className={styles.stamp_image}
                                        alt={'sold out'}
                                    />
                                    <Image
                                        src={card_event}
                                        width={333}
                                        height={414}
                                        alt={event.name}
                                    />
                                </div>) :
                                <div className={styles.cancelled}>
                                    <Image
                                        src={cancelled}
                                        className={styles.stamp_image}
                                        alt={'cancelled'}
                                    />
                                    <Image
                                        src={card_event}
                                        width={333}
                                        height={414}
                                        alt={event.name}
                                    />
                                </div>
                            }

                        </div>
                    )
                        :
                        (
                            <div>
                                <Image
                                    src={card_event}
                                    width={333}
                                    height={414}
                                    alt={event.name}
                                />
                            </div>
                        )
                    }
                </div>
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
                    <button className={`${styles.event_status} ${getEventStatus()}`} >{event.status}</button>
                </div>
            </div>

        </div>
    )
}

export default EventCard;