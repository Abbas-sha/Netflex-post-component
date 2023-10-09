import './App.css';
import Feeds from './Components/Feeds'
<link rel="stylesheet" href="style.css"/>


function App() {
  const obj = {

    title:"   Watch All Netfilx Series in just $10",
    
    images:[ 'https://m.media-amazon.com/images/I/91jkF8kLQqL._AC_UF1000,1000_QL80_.jpg',
    'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
],
    profilePic:"https://static.vecteezy.com/system/resources/previews/022/100/806/non_2x/netflix-logo-transparent-free-png.png",
    username:"Netfilx"}
  return (
    <div className="App">
      <header className="App-header">
       
    <Feeds title={obj.title} images={obj.images} profilePic={obj.profilePic} username={obj.username}/>
      </header>
    </div>
  );
}

export default App;