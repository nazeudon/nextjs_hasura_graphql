import { VFC } from 'react'
import { useCreateForm } from '../hooks/useCreateForm'
import { Child } from './Child'

export const CreateUser: VFC = () => {
  const {
    text,
    handleTextChange,
    username,
    handleUsernameChange,
    printMsg,
    handleSubmit,
  } = useCreateForm()

  return (
    <>
      {console.log('CreateUser rendered')}
      <p className="mb-3 font-bold">Custom Hook + useCallback + memo</p>
      <div className="flex flex-col items-center justify-center mb-3">
        <label>Text</label>
        <input
          className="px-3 py-2 border border-gray-300"
          type="text"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <label>Username</label>
        <input
          className="px-3 py-2 mb-3 border border-gray-300"
          placeholder="New user ?"
          value={username}
          onChange={handleUsernameChange}
        />
        <button className="px-3 py-1 my-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl focus:outline-none">
          Submit
        </button>
      </form>
      <Child printMsg={printMsg} handleSubmit={handleSubmit} />
    </>
  )
}
