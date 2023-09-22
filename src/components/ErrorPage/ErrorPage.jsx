import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Upps mere dil me thori si jaga thi !!!!</h2>
            <Link to='/'>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;