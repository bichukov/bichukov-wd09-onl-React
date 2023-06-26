import './button.scss';
const button = ({children, type = 'primary'}) =>(

        <button className = {`btn btn--${type}`} >{children} type: {type}</button>

);
export default button;