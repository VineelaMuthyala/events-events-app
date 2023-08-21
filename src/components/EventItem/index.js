import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  onClickImage = () => {
    const {imageSelected, event} = this.props
    const {id} = event
    imageSelected(id)
  }

  render() {
    const {event, isSelected} = this.props
    const {imageUrl, name, location} = event
    const buttonClass = isSelected ? 'image-button border' : 'image-button'

    return (
      <div className="eventItem-container">
        <li>
          <button type="button" className={buttonClass}>
            <img
              className="item-image"
              alt="event"
              src={imageUrl}
              onClick={this.onClickImage}
            />
          </button>
          <p className="item-name">{name}</p>
          <p className="item-location">{location}</p>
        </li>
      </div>
    )
  }
}
export default EventItem
