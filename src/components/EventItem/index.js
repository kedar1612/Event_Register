// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEvent, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const imageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEvent(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={imageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
