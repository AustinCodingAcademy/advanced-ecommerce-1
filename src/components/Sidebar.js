import React from "react";

function Sidebar(){
    return (<div className="md-col-3 px3 pb2">
        <p className="lead">Shop Name</p>
        <div className="sidebar-btn-list flex flex-column mxn1 myn1">
            <a href="#" className="btn btn-outline blue nocaps m1">Category 1</a>
            <a href="#" className="btn btn-outline blue nocaps m1">Category 2</a>
            <a href="#" className="btn btn-outline blue nocaps m1">Category 3</a>
        </div>
    </div>)
}

export default Sidebar;