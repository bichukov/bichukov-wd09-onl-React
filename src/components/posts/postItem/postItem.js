import './postItem.scss';
const  PostItem = ({post, size = 'large'}) =>{
    return (
        <div className={`post-item__container-${size}`}>
            <div className = {`posts-item__body ${size !== 'medium' ? 'd-flex-reverse-between' : ''}`}>

                <img className={`post-item-body__img-${size}`} src={post?.image} alt="post image"/>
                <div className="post-item-body__text">
                    <p className="post-item-body-text__date">{post?.date}</p>
                    <p className="post-item-body-text__title">{post?.title}</p>
                    <p className={`post-item-body-text__description ${size !== 'large' ? 'd-none' : ''}`}>{post?.description}</p>
                </div>

        </div>
            <div className="post-item__footer">
                <div className="post-item-footer__group">
                    <button
                        className="post-item-footer-group__button btn-custom"

                    >

                    </button>

                    <button
                        className="post-item-footer-group__button btn-custom"

                    >

                    </button>

                </div>
                <div className="post-item-footer__group">
                    <button
                        className="post-item-footer-group__button btn-custom btn-bookmark"

                    >

                    </button>
                    <button
                        className="post-item-footer-group__button btn-custom"

                    >

                    </button>

                    <div className={`post-item-footer-group__submenu `}>
                        <button className="post-item-footer-group-submenu__button btn-custom">Edit</button>
                        <button className="post-item-footer-group-submenu__button btn-custom">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostItem;