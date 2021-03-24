import { Button } from './Button';
import { useHistory } from 'react-router-dom';

export const Header = ({ title, onShowForm, showAdd }) => {
  const history = useHistory();

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button 
            onClick={() => history.push('/login')}
            bgColor='red'
            text='Logout'>
          </Button>
      </div>
      <header className="header">
        <h1>{title}</h1>
        <Button 
          onClick={onShowForm} 
          text={showAdd ? 'x' : 'Add'}>
        </Button>
      </header>
    </>
  );
};
