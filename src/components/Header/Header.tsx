import './Header.scss';
import Button from '../Button/Button';
import { ButtonColors } from '../../models/button-colors.enum';

function Header() {
    function restartGame() {
        console.log('Restart the game!')
    }

    function startNewGame() {
        console.log('Start a new game!')
    }

    return(
        <header className="header">
            <h1 className="header__title">memory</h1>

            <div className="header__buttons">
                <Button color={ButtonColors.orange} content="Restart" onClick={restartGame}/>
                <Button color={ButtonColors.grey} content="New Game" onClick={startNewGame}/>
            </div>
        </header>
    );
}

export default Header;