export const Button = ({ text, onClick, bgColor }) => {
    return (
        <button 
            style={{backgroundColor: bgColor}}
            onClick={onClick}
            className='btn'>
            {text}
        </button>
    )
}
