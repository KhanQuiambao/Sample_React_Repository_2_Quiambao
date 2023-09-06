import { useState } from "react";

const BasicFormHandling = () => {
    const [firstName, setFirstName] = useState("Mavie");
    const [lastName, setLastName] = useState("Quiambao");
    const user = [firstName, lastName];
    const [userDetails, setUserDetails] = useState("");

    let showInformation = (event) => {
        event.preventDefault();
        setUserDetails(user);
    }
    return ( 
        <>            
            <div className="container mt-5 mb-5">
                <div className="card">
                    <div className="card-body">
                        <form action="" method="">
                            <label htmlFor="">First Name</label>
                            <input className="form-control" type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                            <br></br>
                            <label htmlFor="">Last Name</label>
                            <input className="form-control" type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                            <br></br>
                            <button className="btn btn-dark w-100" onClick={showInformation}>
                                Submit Information
                            </button>
                            <br></br>
                            <label htmlFor="">Show Result:</label>
                            <h3>{userDetails[0]}</h3>
                            <h3>{userDetails[1]}</h3>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default BasicFormHandling;