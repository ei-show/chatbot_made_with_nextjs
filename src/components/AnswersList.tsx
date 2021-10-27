import React from 'react'
import { Answer } from '../index'

export default function AnswersList(props): JSX.Element {
  // console.log(answers)
  // const answerType = 'input'

  return (
    <div className="fixed bottom-0 left-0">
      {(props.type === 'question') ? (
        props.answers.map((value, index) => {
          return <Answer answer={props.answers[index]} key={index.toString()} select={props.select} />
        })
      ) : (
        <div className="flex m-1">
          <input type="text" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 px-4 bg-gray-200 rounded-full py-2" placeholder="回答を入力" />
          <button>a</button>
        </div>
      )}
    </div>
  )
}
