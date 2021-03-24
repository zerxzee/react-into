import { Poca } from './Poca'

export const Pocas = ({ pocas, onDelete }) => {
    return (
        <div className='pocas'>
            { pocas.map((poca) => (
                <Poca key={poca.id} poca={poca} onDelete={onDelete}></Poca>
            ))}
        </div>
    )
}
