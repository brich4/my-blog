import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';

import NavBar from './components/NavBar';

function App() {
    return (
    <Router>
        <NavBar />
        <div className = 'max-w-screen-md mx-auto pt-20'>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/article-list' component={ArticleList} />
            <Route exact path='/article/:name' component={Article}/>
        </div>
    </Router>
    );
}

export default App;