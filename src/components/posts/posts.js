import Postlarge from "./postlarge/postlarge";
import PostMedium from "./postMedium/postMedium";
import PostSmall from "./postSmall/postSmall";
import {useSelector} from "react-redux";


const Posts = ({posts}) => {
    if (!posts.length) {
        return null;
    }
    return (
        <div className="container">
            <div className="post-item__container">
                <div className="post-item__container-wdt70">
                    <Postlarge posts={posts}/>
                    <PostMedium posts={posts}/>
                </div>
                <PostSmall posts={posts}/>
            </div>
        </div>
    );
}
export default Posts;