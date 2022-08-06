function CallButton() {
  return (
    <button className="custom-buttom-1 btn btn-secondary">
      <a
        href=""
        onClick={Calendly.initPopupWidget({
          url: 'https://calendly.com/nicoletongu'
        })}
        className="button-link"
      >
        Book a call
      </a>
    </button>
  )
}

export default CallButton
