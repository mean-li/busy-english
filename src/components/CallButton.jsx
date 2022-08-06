function CallButton() {
  function CalendlyPopup() {
    Calendly.initPopupWidget({ url: 'https://calendly.com/nicoletongu' })
    return false
  }
  return (
    <button className="custom-buttom-1 btn btn-secondary">
      <a href="" onClick={CalendlyPopup()} className="button-link">
        Book a call
      </a>
    </button>
  )
}

export default CallButton
