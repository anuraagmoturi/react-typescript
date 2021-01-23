const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {

  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('im being dragged')
  }

  return <div>
    <input onChange={onChange} />
    <div draggable onDragStart={onDragStart}> Drag me</div>
  </div>
}

export default EventComponent;