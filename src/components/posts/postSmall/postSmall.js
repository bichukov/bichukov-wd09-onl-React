
import './postSmall.scss'

const PostSmall = ({ posts, setPosts }) => {
    return (
        <div className="post-item__container30">
            {posts.slice(6, 12).map(item => (
                <div key={item.id}>
                    <div className="post-item__container30-small">
                        <div className="post-item__container30-small-description">
                            <div className="post-item__container30-small-description-date">
                                {item?.date}
                            </div>
                            <h2 className="post-item__container30-large-description-title">
                                {item?.title}
                            </h2>
                        </div>
                        <img src={item?.image} className="post-item__container30-small-image"></img>

                        <hr className="under-line"/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostSmall