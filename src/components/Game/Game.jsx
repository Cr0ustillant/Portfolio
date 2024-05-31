import '../Game/GameStyle/game.css'
import Requin from '../Game/GameComponent/requin'

function Game() {
    return (
        <div className='game-container'>
            <h2>Shark Game</h2>
            <div className='game'>
                <Requin />
            </div>
        </div>
    )
}

export default Game;