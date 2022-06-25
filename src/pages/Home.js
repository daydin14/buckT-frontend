import { useState } from "react";
import Create from "../components/Create";

const Home = (props) => {
    const [pathURL, setPathURL] = useState(null);

    const selectURL = (event) => {
        setPathURL(event.target.innerText.toLowerCase())
    }

    const URL = `https://bucktt.herokuapp.com/${pathURL}`
    const createDestination = async (destination) => {
        if (!props.user) return;
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(destination)
        });
    };

    return (
        <div className="Home">
            {!props.user &&
                <>
                    <h1 className="neonText">Welcome to {<img src="https://cdn-icons-png.flaticon.com/512/3713/3713262.png" width={60}/>}</h1>
                    <p className="neonText">{<img src="https://cdn-icons-png.flaticon.com/512/3713/3713262.png" width={60}/>} is your one-stop travel bucket list maker.</p>
                    <p className="neonText"> Add the destination of your dreams to your list, and begin daydreaming!</p>
                    <p className="neonText">Please login to enjoy all the features of our site!</p>
                </>
            }
            {props.user &&
                <>
                    <div className="addBucket">
                        <button onClick={selectURL} value="activity">Activity</button>
                        <button onClick={selectURL} value="location">Location</button>
            
                    </div>
                    <div className="input">
                    <Create createDestination={createDestination} />
                    </div>
                </>
            }
        </div>
    );
};
export default Home;