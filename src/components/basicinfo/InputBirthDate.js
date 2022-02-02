import React, { useState, useEffect } from "react";

export function InputBirthDate(){
    const today = new Date();
    const thisYear = today.getFullYear();
    const birthYear = [];
    const birthMonth = [];
    const birthDate = [];

    for(let i = thisYear - 80; i<= thisYear; i++){
        birthYear.push(i);
    }
    for(let i = 1; i<= 12; i++){
        birthMonth.push(i);
    }
    for(let i = 1; i<= 31; i++){
        birthDate.push(i);
    }

    const [userSelectYear, setUserSelectYear] = useState();
    const [userSelectMonth, setUserSelectMonth] = useState();
    const [userSelectDate, setUserSelectDate] = useState();

    const handleChange = e => {
        if(e){
            if(e.target.name === 'year'){
                let year = Number(e.target.value);
                console.log(typeof(year));
                setUserSelectYear(year);
            }
            if(e.target.name === 'month'){
                setUserSelectMonth(e.target.value);
            }
            if(e.target.name === 'date'){
                setUserSelectDate(e.target.value);
            }
        }
        else{
            console.error('undefind');
        }
    }

    useEffect((userSelectYear) =>{
            //処理
            console.log(userSelectYear);
            if(userSelectYear % 400 === 0){
                return console.log(true);
                if(year % 4 === 0 && year % 100 !== 0){
                    return console.log(true);
                }
            }else{
                return console.log(false);
            }
    },[userSelectYear]);

    return(
        <>
            <p>
                -生年月日-
            </p>        
            <form>
                <label>
                    <select
                        name = 'year'
                        onChange={handleChange}
                    >
                        {birthYear.map((year) =>{
                            return(
                                <option key={'Year:' + year} value={year}>
                                    {year}
                                </option>
                            )     
                        })}
                    </select>
                    年
                </label>
                <label>
                <select
                        name = 'month'
                        onChange={handleChange}
                    >
                        {birthMonth.map((month) =>{
                            return(
                                <option key={'Month:' + month} value={month}>
                                    {month}
                                </option>
                            )     
                        })}
                    </select>
                    月
                </label>
                <label>
                <select
                        name = 'date'
                        onChange={handleChange}
                    >
                        {birthDate.map((date) =>{
                            return(
                                <option key={'Date:' + date} value={date}>
                                    {date}
                                </option>
                            )     
                        })}
                    </select>
                    月
                </label>

            </form>

        </>

    )

}