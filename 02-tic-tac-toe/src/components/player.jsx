import {useState} from 'react'

export default function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)

    function handleEdit() {
        setIsEditing((value) => !value)
        /*setIsEditing(!isEditing) -> this operation under the hood will be
        scheduled and for instance if you call it twice in a row, you might not be able to get your expected result.
        to fix that we use lambda function.
        */
    }

    function handleChangePlayerName(event) {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = isEditing ?
        <input type='text' required value={playerName} onChange={handleChangePlayerName}/> :
        <span className='player-name'>{playerName}</span>
    let editText = isEditing ? 'Submit' : 'Edit'
    return (
        <li>
                <span className='player'>
                    {editablePlayerName}
                    <span className='player-symbol'>{symbol}</span>
                </span>
            <button onClick={handleEdit}>{editText}</button>

        </li>
    );
}