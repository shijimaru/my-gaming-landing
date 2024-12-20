import React from 'react';
import GameList from './components/gamelist';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
    return (
        <div>
            <Header />
            <GameList />
            <Footer />
        </div>
    );
};

export default App;
