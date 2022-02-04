import React, { useState, useEffect } from "react";

export function InputBirthDate(){
    const today = new Date();
    const thisYear = today.getFullYear();
    const oldYear = thisYear - 80;

    const yearArray = [];
    const monthArray = [];
    let days_28 = [];
    let days_29 = [];
    let days_30 = [];
    let days_31 = [];

    const [birthYear, setBirthYear] = useState([]);
    const [birthMonth, setBirthMonth] = useState([]);
    const [birthDate, setBirthDate] = useState([]);

    const [userSelectYear, setUserSelectYear] = useState(oldYear);
    const [userSelectMonth, setUserSelectMonth] = useState(1);
    const [userSelectDate, setUserSelectDate] = useState(1);

    const handleChange = e => {
        if(e){
            if(e.target.name === 'year'){
                let year = Number(e.target.value);
                setUserSelectYear(year);
            }
            if(e.target.name === 'month'){
                let month = Number(e.target.value);
                setUserSelectMonth(month);
            }
            if(e.target.name === 'date'){
                let date = Number(e.target.value);
                setUserSelectDate(date);
            }
        }
        else{
            console.error('undefind');
        }
    };

    useEffect(() =>{
        for(let i = oldYear; i<= thisYear; i++){
            yearArray.push(i);
        }
        setBirthYear(yearArray);
        
        for(let i = 1; i<= 12; i++){
            monthArray.push(i);
        }
        setBirthMonth(monthArray);
        
        for(let i = 1; i<= 31; i++){
            days_31.push(i);
        }
        for(let i = 1; i<= 30; i++){
            days_30.push(i);
        }
        for(let i = 1; i<= 29; i++){
            days_29.push(i);
        }
        for(let i = 1; i<= 28; i++){
            days_28.push(i);
        }
        setBirthDate(days_31);
    },[])

    useEffect(() =>{
        const lastDay = new Date(userSelectYear, userSelectMonth, 0).getDate();
        switch (lastDay){
            case 28:{
                setBirthDate(days_28);
            }
            case 29:{
                setBirthDate(days_29);
            }
            case 30:{
                setBirthDate(days_30);
            }
            case 31:{
                setBirthDate(days_31);
            }
        }
    },[userSelectMonth]);

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
                    日
                </label>

            </form>
        </>
    )
}