import './index.css'

const regStatus = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventRegDetails} = props
  console.log(props)

  if (eventRegDetails.length === 0) {
    return (
      <div className="reg-details-container">
        <p className="reg-details-text">
          Click on an event, to view its registration details
        </p>
      </div>
    )
  }
  const {registrationStatus} = eventRegDetails[0]

  const yetToRegister = () => (
    <div className="reg-details-container">
      <img
        className="yet-to-register-image"
        alt="yet to register"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      />
      <p className="yet-to-register-text">
        A live performance brings so much to your relationship with dance.
      </p>
      <button className="btn" type="button">
        Register Here
      </button>
    </div>
  )

  const registered = () => (
    <div className="reg-details-container">
      <img
        className="registered-image"
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const registrationClosed = () => (
    <div className="reg-details-container">
      <img
        className="registration-closed-image"
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      />
      <h1 className="registration-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-text">
        Stay Tuned. We will reopen the registration soon!
      </p>
    </div>
  )

  switch (registrationStatus) {
    case regStatus.yetToRegister:
      return yetToRegister()
    case regStatus.registered:
      return registered()
    case regStatus.registrationClosed:
      return registrationClosed()
    default:
      return null
  }
}
export default ActiveEventRegistrationDetails
