export default function Answer(props): JSX.Element {
  return (
    <button className="w-screen text-left bg-gray-200 mt-0.5 p-1"
      onClick={() => props.select(props.answer.content, props.answer.nextId)}
    >{props.answer.content}</button>
  )
}
