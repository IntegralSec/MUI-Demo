import './user.css'

export default function User() {
  return (
    <div className='user'>
        <div className='userTitleContainer'>
            <h1 className='userTitle'>Edit User</h1>
            <button className='userAddButton'>Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop"></div>
                <div className="img userShowImg">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                </div>
                <div className="userShowBottom"></div>
                
            </div>
            <div className="userUpdate">
                user update
            </div>
        </div>
    </div>
  )
}
