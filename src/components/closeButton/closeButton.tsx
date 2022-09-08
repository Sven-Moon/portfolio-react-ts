
type Props = {
  backgroundOpacity: number,
  backgroundColor: string,
  color: string
}

const CloseButton = (props: Props) => {
  return (
    <div style={{backgroundColor: `${props.backgroundColor}`, opacity: `${props.backgroundOpacity}`, color: `${props.color}`}}>
      x
    </div>
  )
}

export default CloseButton

CloseButton.defaultProps = {
  backgroundOpacity: 1, 
  backgroundColor: '#000',
  color: '#fff'
}
