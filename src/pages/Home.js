import Create from "../components/Create";

const Home = (props) => {
    const URL = ''
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

    return(
        <div className="Home">
            <h1 className="neonText">Welcome to {`<li>Buck-T</li>`}</h1>
            <p className="neonText">{`<li>Buck-T</li>`} is your onse-stop travel bucket list maker.</p>
            <p className="neonText"> Add the destination of your dreams to your list, and begin daydreaming!</p>
            { !props.user &&
                <p className="neonText">Please login to enjoy all the features of our site!</p>
            }
            { props.user &&
                <Create createDestination={createDestination}/>
            }
        </div>
    );
};
export default Home;