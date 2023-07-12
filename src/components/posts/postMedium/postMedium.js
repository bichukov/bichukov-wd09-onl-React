

    import './postMedium.scss'


    const PostMedium = ({posts}) => {

        return (
            <div className="post-item__container-middle">
                {posts.slice(1, 5).map(item => (
                    <div className="post-item__container-middle-cell" key={item.id}>
                        <img src={item?.image} className="post-item__container-middle-cell-image"></img>
                        <div className="post-item__container-middle-cell-description">
                            <div className="post-item__container-middle-cell-description-date">
                                {item?.date}
                            </div>
                            <h2 className="post-item__container-middle-cell-description-title">
                                {item?.title}
                            </h2>
                        </div>

                        <hr className="under-line-middle"/>
                    </div>
                ))}
            </div>
        )
    }

    export default PostMedium