import React from 'react';
import { InputServey } from './InputServey';
import { PaginationBtn } from './PaginationBtn';

export function ServeyHeader(){
    return(
        <h1>
            ご相談内容をご記入ください
        </h1>
    );
};

export function Servey(){
    return(
        <>
            <InputServey/>
        </>
    );
};

export { PaginationBtn as ServeyPagination };