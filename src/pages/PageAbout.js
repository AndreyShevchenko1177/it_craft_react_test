import {Link} from "@material-ui/core";
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';

const PageAbout = function () {

    return <>
        <div  className='aboutWrapper'>
            <h1>{'Andrey Shevchenko'}</h1>
            <h2>{'Front-End developer'}</h2>
            <h3><a href="https://www.linkedin.com/in/shevchenko77/" target="_blank">Linkedin</a></h3>

            <p>
            <Link href="/notes">{'Home'}</Link>
            </p>
        </div>

    </>
}

export default PageAbout