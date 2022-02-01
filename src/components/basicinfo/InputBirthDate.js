import React from "react";

export function InputBirthDate(){
    return(
        <>
            <p>
                -生年月日-
            </p>        
            <form>
                <label>
                    <select id='year'></select>
                    年
                </label>
                <label>
                    <select id='month'></select>
                    月
                </label>
                <label>
                    <select id='date'></select>
                    日
                </label>
            </form>

        </>
    )
}