import { useState } from 'react';

export const AddPoca = ({onAdd}) => {
    const [text, setText] = useState('')
    const [price, setPrice] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text || !price) {
            alert('Please add a poca name')
            return
        }

        onAdd({ text, price })

        setText('')
        setPrice('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Poca Name</label>
                <input 
                    type='text' 
                    placeholder='Poca Name' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Poca Price</label>
                <input 
                    type='number' 
                    placeholder='Poca Price' 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>

            <input type='submit' value='Add Poca' className='btn btn-block'/>
        </form>
    )
}
