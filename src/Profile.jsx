import React from "react";



const profile = () => {
    return (
        <div>

        <div class="profile">
            <h3>Reg-Date: 01.11.20</h3>
            <h3>Last-Login: 01.11.20</h3>
            <h3>Total Posts: 123</h3>
            <h3>Total Comments: 587</h3>
            <h3>Total AnLi: 332</h3>

        </div>

            <div className="profile-pic">

                <h2>ID: <span>#0</span></h2>
                <img src="/public/avarat.png" width="20%" alt="Hi"/>

            </div>
        </div>
    );
}

export default profile;