import './postlarge.scss'
import '../posts.scss'

const PostLarge = ({posts, setPosts}) => {

    return (
        <div className="post-item__container-large">
            <div className="post-item__container-large-description">
                <div className="post-item__container-large-description-date">
                    {posts[0]?.date}
                </div>
                <h2 className="post-item__container-large-description-title">
                    {posts[0]?.title}
                </h2>
                <p className="post-item__container-large-description-text">
                    {posts[0]?.description}
                </p>
            </div>
            <img src={posts[0]?.image} className="post-item__container-large-image"></img>
            <div className="post-item__container-large-footer">

            </div>
            <hr className="under-line"/>
        </div>
    )
}

export default PostLarge