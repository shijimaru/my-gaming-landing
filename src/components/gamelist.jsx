import React from 'react';
import './gamelist.css';

class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }

    fetchGames() {
        fetch('https://api.rawg.io/api/games?key=bcfbb4b8279e45f198b04f1a13ae063c')
            .then(response => response.json())
            .then(data => {
                this.setState({ games: data.results });
            });
    }

    componentDidMount() {
        this.fetchGames();
    }

    render() {
        return (
            <main id='games'>
                <h1>Список игр</h1>
                <section className='card-container'>
                    {this.state.games.map(game => (
                        <div className='card' key={game.id}>
                            <h2>{game.name}</h2>
                            <img src={game.background_image} alt={game.name} width="200" className='card-image'/>
                            <p>Рейтинг: {game.rating}</p>
                        </div>
                    ))}
                </section>
            </main>
        );
    }
}

export default GameList;
