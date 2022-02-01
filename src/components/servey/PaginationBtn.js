import React from "react";
import { Link } from 'react-router-dom';

export function PaginationBtn(){
    return(
        <Link to='/consultation'>
            <a class="button is-link">次へ進む</a>
        </Link>
    );
};