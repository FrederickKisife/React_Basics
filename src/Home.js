import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import walk from './Walk.gif';
import useFetch from './useFetch';

const Home = () => {
    const{data:blogs, error, isLoading } = useFetch("http://localhost:8000/blogs")

  
    return ( 
        <div className="home">
          {error && <div>{error}</div>}
          {isLoading && <div><img className='img' src={walk} alt='img'></img></div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs!!!"/>}
        </div>
     );
}
 
export default Home;