import { ChangeEvent, FormEvent, useState, VFC } from 'react'
import { todoVar } from '../cache'
import { useReactiveVar } from '@apollo/client'
import Link from 'next/link'

export const LocalStateA: VFC = () => {
  const [input, setInput] = useState('')
  const todos = useReactiveVar(todoVar)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    todoVar([...todoVar(), { title: input }])
    setInput('')
  }

  return (
    <>
      <p className="mb-3 font-bold">makeVar</p>
      {todos?.map((task, index) => {
        return (
          <p className="mb-3 y-1" key={index}>
            {task.title}
          </p>
        )
      })}
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className="px-3 py-2 mb-3 border border-gray-300"
          placeholder="New task ?"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <button
          disabled={!input}
          className="px-3 py-1 mb-3 text-white bg-indigo-600 disabled:opacity-40 hover:bg-indigo-700 rounded-2xl focus:outline-none"
          type="submit"
        >
          Add new state
        </button>
      </form>
      <Link href="/local-state-b">
        <a>Next</a>
      </Link>
    </>
  )
}
