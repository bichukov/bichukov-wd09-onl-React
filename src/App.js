import React, {useEffect, useState} from "react";
import Menu from "./components/menu/menu";
import Title from "./components/title/title";
import Tabs from "./components/Tabs/Tabs";

import Posts from "./components/posts/posts";
import './App.scss';


function App() {
    const [ posts, setPosts ] = useState([]);
  const user = {
      firstName : 'Serg',
      lastName : 'bert',
  };
    useEffect(() => {
        const getPosts = async() => {
            try{
                const urlParams = new URLSearchParams({
                    limit: 20,
                    offset: 1
                });
                console.log('https://studapi.teachmeskills.by/blog/posts?' + urlParams);
                const { results: postsResponse } = await fetch('https://studapi.teachmeskills.by/blog/posts?' + urlParams)
                    .then(response => response.json())

                setPosts(postsResponse);
            } catch (e){
                console.error(e)
            }
        }

        getPosts()
    }, []);
  const title = ('Blog');
  return (
    <div className="App ">
<Menu user={user} />
        <div className='mane'>
        <Title title={title}/>
        <Tabs/>
        <Posts  posts = {posts}/>
    </div>
    </div>

  );
}

export default App;
