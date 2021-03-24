import { FaTimes } from 'react-icons/fa'

export const Poca = ({ poca, onDelete }) => {
    return (
        <div className='poca'>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={() => onDelete(poca.id)}></FaTimes>
            </div>
            <h6>
                {poca.text}
            </h6>
            <p style={{color:'green'}}>₱{poca.price}</p>
        </div>
    )
}
