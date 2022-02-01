import React, { createElement, useState } from 'react';
import { GenderSelect } from './GenderSelect';
import { InputBirthDate } from './InputBirthDate';

export function BasicInfoHeader(){
    return(
        <h1>
        お客様の情報を入力して下さい
        </h1>
    );
};

export function BasicInfo(){
    return (
        <>
            <GenderSelect/>
            <InputBirthDate/>
        </>
    );
};
