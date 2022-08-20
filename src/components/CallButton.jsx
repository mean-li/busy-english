import { PopupButton } from 'react-calendly'

function CallButton() {
  return (
    <button className="custom-button-1 btn btn-secondary">
      <PopupButton
        styles={{
          overflow: 'hidden',
        }} url="https://calendly.com/nicoletongu"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById('root')}
        className="w-100 bg-transparent border-0 button-link button-1-text"
        text="Agende um horário comigo"

      />
    </button>
  )
}

export default CallButton
