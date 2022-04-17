import axios from "axios"
import { useEffect, useState } from "react"
import "../SellerProfile.css"
function SellerProfile(){
    const id=sessionStorage.getItem("id")
    const [user,setUser]=useState({
        "id":sessionStorage.getItem("id"),
        "name":"",
        "city":"",
        "userid":"",
        "pwd":"",
        "phone":""
    })

    useEffect(()=>{
        axios.get("http://localhost:8080/api/sellers/"+id)
        .then(resp=>{
            console.log(resp.data.data)
            setUser(resp.data.data)
        })
    },[])
    return (
        
        // <div className="container">
        //     <div className="m-3 p-2 bg-transparent text-white text-center">
        //         <h4 className="p-2" style={{borderBottom:"2px solid green",width:"300px",margin:"auto"}}>Seller Profile Page</h4>
        //         <br/>
        //         <h4>Welcome {user.name}</h4>
        //         <h5>City : {user.city}</h5>
        //         <h5>User Id : {user.userid}</h5>
        //         <h5>Contact No : {user.phone}</h5>
        //     </div>
        // </div>



<div className="page-content page-container" id="page-content">
<h4 className="p-2" style={{borderBottom:"2px solid green",width:"300px",margin:"auto"}}>Seller Profile Page</h4>
<div className="padding">
    <div className="row container d-flex justify-content-center">
        <div className="col-xl-6 col-md-12">
            <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                    <div className="col-sm-4 bg-c-lite-green user-profile">
                        <div className="card-block text-center text-white">
                            <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image"/> </div>
                            <h6 className="f-w-600">Welcome {user.name}</h6>
                            <p>Seller</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-block">
                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600">User Id: </p>
                                    <h6 className="text-muted f-w-400">{user.userid}</h6>
                                </div>
                                <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600">Contact No: </p>
                                    <h6 className="text-muted f-w-400">{user.phone}</h6>
                                </div>
                            </div>
                            {/* <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">City : {user.city}</h6> */}
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600">City : </p>
                                    <h6 className="text-muted f-w-400">{user.city}</h6>
                                </div>
                                {/* <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600">Most Viewed</p>
                                    <h6 className="text-muted f-w-400">{user.city}</h6>
                                </div> */}
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
}

export default SellerProfile;
