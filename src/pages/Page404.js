import {Link} from "@material-ui/core";
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';


const Page404 = function () {

    const [timer, setTimer] = useState(10);
    const history = useHistory();

    useEffect(() => {
        let i = 0;
        for (i = 0; i < timer; i++) {
            setTimeout(() => {
                setTimer((prev) => prev - 1);
            }, i * 1000);

        };

        setTimeout(() => {
            history.push('/notes');
        }, (i + 1) * 1000);

    }, []);


    return <>
        <div className='wrapper404'>
            <div>
                <h2>{"404: Oops! We can’t find that page"}</h2>
                <h2>
                    {"Take me "}
                    <Link href="/notes">{'home'}</Link>
                    {` if it doesn't happen in ${timer} seconds.`}
                </h2>
            </div>
        </div>

    </>;
};

export default Page404;