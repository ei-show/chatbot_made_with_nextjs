import React, { useState, useEffect, useCallback } from 'react'
import defaultDataset from '../src/dataset'
import { AnswersList, Chats } from '../src/index'

export default function Index(): JSX.Element {
  const [answers, setAnswers] = useState([]) // 回答コンポーネントに表示するデータ
  const [chats, setChats] = useState([]) // チャットコンポーネントに表示するデータ
  const [currentId, setCurrentId] = useState('init') // 現在の質問ID
  const dataset = defaultDataset

  // 新しいチャットを追加するCallback関数
  const addChats = useCallback(
    (chat) => {
      setChats((prevChats) => {
        return [...prevChats, chat]
      })
    },
    [setChats]
  )

  // 次の質問をチャットエリアに表示する関数
  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    // 選択された回答と次の質問をチャットに追加
    addChats({
      text: nextDataset.question,
      type: 'question',
    })

    // 次の回答一覧をセット
    setAnswers(nextDataset.answers)

    // 現在の質問IDをセット
    setCurrentId(nextQuestionId)
  }

  // 回答が選択された時に呼ばれる関数
  const selectAnswer = useCallback(
    (selectedAnswer, nextQuestionId) => {
      switch (true) {
        // お問い合わせが選択された場合
        // case (nextQuestionId === 'contact'):
        //   handleOpen();
        //   break;

        // リンクが選択された時
        // case /^https:*/.test(nextQuestionId):
        //   const a = document.createElement('a');
        //   a.href = nextQuestionId;
        //   a.target = '_blank';
        //   a.click();
        //   break;

        // 選択された回答をchatsに追加
        default:
          // 現在のチャット一覧を取得
          addChats({
            text: selectedAnswer,
            type: 'answer',
          })

          setTimeout(
            () => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]),
            750
          )
          break
      }
    },
    [answers]
  )

  // 最初の質問をチャットエリアに表示する
  useEffect(() => {
    // (async() => {
    // const initDataset = {};
    const initDataset = dataset

    // Fetch questions dataset from Firestore
    // await db.collection('questions').get().then(snapshots => {
    //     snapshots.forEach(doc => {
    //         initDataset[doc.id] = doc.data()
    //     })
    // });

    // Firestoreから取得したデータセットを反映
    // setDataset(initDataset);

    // 最初の質問を表示
    displayNextQuestion(currentId, initDataset[currentId])
    // })();
  }, [])

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen bg-blue-300">
      <div
        id="messages"
        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
          <Chats chats={chats} />
          <AnswersList answers={answers} select={selectAnswer} />
          
      </div>
    </div>
  )
}
