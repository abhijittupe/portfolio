import '../App.css'
import { useState } from "react"
import React from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

function AIchatbot() {
  const [input, setInput] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  let dummy = [];
  const handleSend = async () => {
    if (input.trim() != '') {
      const genAI = new GoogleGenerativeAI(
        "AIzaSyCnlxZOdRYgjpXh9nUIFqfthg0qJUYMMQw"
      )
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

      const prompt = input
      const result = await model.generateContent(prompt)
      console.log(result.response.text())
      dummy.push({
        userText: input,
        aiText: result.response.text(),
      })
      setChatHistory([...chatHistory, ...dummy])
      setInput('')
    }

  }
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col bg-gray-900 text-white">
      {
        chatHistory.map((val, i) =>
        (
          <div className="flex-1 overflow-y-auto p-4 space-y-4" key={i}>
            {console.log(val, val.userText)}
            <p>{val.userText}</p>
            <h2>{val.aiText}</h2>
          </div>
        ))
      }
      <div className="p-4 border-t border-gray-700 flex gap-1">
        <input className="flex-1 p-3 bg-gray-800 text-white rounded-lg focus:ring focus:ring-blue-500" type="text" value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message" />
        <button className="p-3 bg-blue-600 rounded-lg hover:bg-blue-500" onClick={handleSend}>send</button>
      </div>
    </div>
  )
}

export default AIchatbot
