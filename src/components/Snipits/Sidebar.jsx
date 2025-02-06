import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className="sidebar-main-div">
            <div className="slidebar-profile-div">
            <div className='slidebar-profile-main'>
              <div className="slidebar-img-div"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYP5_nJ3Xh4As_ESJ6iBtLQAQF-mCIBEZKg&s" alt="" /></div>
              <div className="slidebar-name-div"><h3>Pranjal Jawalkar</h3> <p>Admin</p></div>
              </div>
            </div>
            <div className="slidebar-pages-div">
              <div className="slidebar-page-main">
                <div className="slidebar-page-name"><h4> <i class="ri-dashboard-line"></i> Dashboard</h4></div>
                <div className="slidebar-page-name"><h4> <i class="ri-user-add-line"></i> Add Donor</h4></div>
                <div className="slidebar-page-name"><h4><i class="ri-booklet-line"></i> Donor List</h4></div>
                <div className="slidebar-page-name"><h4> <i class="ri-delete-bin-6-line"></i> Delete Donor</h4></div>
                <div className="slidebar-page-name"><h4><i class="ri-megaphone-line"></i> Announcement</h4></div>
              </div>
            </div>
            <div className="slidebar-logout-div">
            <div className="slidebar-logout-main">
            <div className="slidebar-logout-name"><h4> <i class="ri-logout-box-line"></i> Logout</h4></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar