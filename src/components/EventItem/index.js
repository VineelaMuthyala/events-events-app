import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  state = {isClicked: false}

  onClickImage = () => {
    const {imageSelected, event} = this.props
    const {id} = event
    imageSelected(id)
    this.setState({isClicked: true})
  }

  render() {
    const {event} = this.props
    const {imageUrl, name, location} = event
    const {isClicked} = this.state
    const buttonClass = isClicked ? 'border' : ''

    return (
      <div className="eventItem-container">
        <li>
          <button type="button" className={`image-button ${buttonClass}`}>
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
