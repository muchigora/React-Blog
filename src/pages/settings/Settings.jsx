import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>

            <form className="settingsForm">
                <label> Profile Picture</label>
                <div className="settingsProfPic">
                    <img 
                        src="https://placebeard.it/640x360" 
                        className="" 
                        alt="" 
                    />

                    <label htmlFor="fileInput">
                        <i className="settingsProfPicIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}></input>
                </div>

                <label>Username</label>
                <input type="text"placeholder="Username"/>
                <label>Email</label>
                <input type="text"placeholder="name@email.com"/>
                <label>Password</label>
                <input type="text"placeholder="password"/>

                <button type="submit" className="settingsSubmitButton">Update</button>


            </form>


        </div> 


        <Sidebar/>
      
    </div>
  )
}
