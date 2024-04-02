import { Link, useRouteError } from "react-router-dom";

const  ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>oops!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                <Link to='/'><button>Home</button></Link>
            }
        </div>
    );
};

export default ErrorPage;