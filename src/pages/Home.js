import { useState } from "react";
import Create from "../components/Create";

const Home = (props) => {
    const [ pathURL, setPathURL ] = useState(null);

    const selectURL = (event) => {
        setPathURL(event.target.innerText.toLowerCase())
    }
    
    const URL = `https://buckt-backend.herokuapp.com/${pathURL}` //need to update w/ heroku link when deployed
    const createDestination = async (destination) => {
        if (!props.user) return;
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(destination)
        });
        // getDestination();
    };
    
    // console.log(URL)

    return(
        <div className="Home">
            { !props.user &&
            <>
                <h1 className="neonText">Welcome to {`<li>Buck-T</li>`}</h1>
                <p className="neonText">{`<li>Buck-T</li>`} is your onse-stop travel bucket list maker.</p>
                <p className="neonText"> Add the destination of your dreams to your list, and begin daydreaming!</p>
                <p className="neonText">Please login to enjoy all the features of our site!</p>
            </>
            }
            { props.user &&
            <>
                <div className="addBucket">
                    <button onClick={selectURL} value="activity">Activity</button>
                    <button onClick={selectURL} value="location">Location</button>
                </div>
                <Create createDestination={createDestination} />
            </>
            }
        </div>
    );
};
export default Home;