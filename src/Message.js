import './Message.scss'

function Message(props) {
  return <div className="message">Привет, { props.name }!</div>
}

export default Message
