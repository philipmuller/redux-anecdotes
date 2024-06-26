import { useDispatch } from "react-redux"
import { addActionCreator } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    
    const addAnecdote = (event) => {
        event.preventDefault()
        dispatch(addActionCreator(event.target.anecdote.value))
        event.target.anecdote.value = ''
    }
    
    return (
        <>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input name="anecdote"/></div>
            <button type="submit">create</button>
        </form>
        </>
    )
}

export default AnecdoteForm