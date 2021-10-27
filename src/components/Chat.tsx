type props = {
  text: string,
  type: string,
}

export default function Chat({text, type}: props): JSX.Element {
  const isQuestion = (type === 'question')
  
  return (
    <>
    {isQuestion ? (
      <div className="pb-1 flex items-end">
        <img
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt="My profile"
          className="w-6 h-6 rounded-full"
        />
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 items-start">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-white text-gray-600">
              {text}
            </span>
          </div>
        </div>
      </div>
    ) : (
      <div className="pb-1 flex items-end flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt="My profile"
          className="w-6 h-6 rounded-full"
        />
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 items-start">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-green-300 text-gray-600">
              {text}
            </span>
          </div>
        </div>
      </div>
    )}
    </>
  )
}
