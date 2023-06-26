import {ReactComponent as UserIcon}  from "../../../assets/svg/userProfile.svg";
import './userProfile.scss'
const userProfile =({user = {} }) =>{
    return(
        <div className='userProfile'>
            {
                user.firstName ? (
                    <>
                        <p className='userProfile__init'>
                            {user?.firstName[0]}
                            {user?.lastName[0]}
                        </p>
                        <p className='userProfile__full-name'>
                            {  `${user.firstName} ${user.lastName}` }
                        </p>
                    </>
                ) : (
                    <button className='button-custom'>
                        <UserIcon/>
                    </button>

                )
            }
        </div>
    )
}
export default userProfile;