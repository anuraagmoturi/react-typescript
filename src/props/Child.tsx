export interface ChildProps {
  color: string;
  onClick: () => void
}

//downside is typescript can't understand default react properties on child
export const ChildFC = ({ color, onClick }: ChildProps) => {
  return <div> Child component: {color}
    <button onClick={onClick}> Click Me</button>
  </div>
}

//another way
export const Child: React.FC<ChildProps> = ({ color, onClick }) => {
  return <div> Child component: {color}
    <button onClick={onClick}> Click Me</button>
  </div>
}