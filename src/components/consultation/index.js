import React from 'react';
import { InputConsultation } from './InputConsultation';
import { PaginationBtn } from './PaginationBtn';

export function ConsultationHeader(){
    return(
        <h1>
            ご相談内容をご記入ください
        </h1>
    );
};

export function Consultation(){
    return(
        <>
            <InputConsultation/>
        </>
    );
};

export { PaginationBtn as ConsultationPagitation }