import useFetch from "./useFetch";
import {useParams} from 'react-router-dom';
import walk from './Walk.gif';
import {useHistory} from "react-router-dom"

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, isLoading, error} = useFetch("http://localhost:8000/blogs/" + id)
    const history =useHistory()

    const handleDelete = ()=>{
        fetch("http://localhost:8000/blogs"  + blog.id, {
            method: "DELETE"
        }).then(()=>{
            history.push("/")
        })
    }

    return ( 
        <div className="blog-details">
            {isLoading && <div><img className='img' src={walk} alt='img'></img></div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                <h2>{blog.title}</h2>
                <div>{blog.body}</div>
                <h2 style={{fontStyle: "italic",
                fontWeight: "bold"}}>{blog.author}</h2>
                <button onClick={handleDelete}>Delete Blog</button>
                </article>
                
            )}
        </div>
     );
}
 
export default BlogDetails;