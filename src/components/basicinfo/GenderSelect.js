import React, { useState } from 'react';


export function GenderSelect(){
    
    const [gender, setGender] = useState('male');
    const handleChange = e => {
        if(e){
            setGender(e.target.value);
        }
        else{
            console.log("UNDEFIND");
        }
    }
    return (
        <>
            <label>
            <input
                type="radio"
                value="male"
                onChange={handleChange}
                checked={gender === 'male'}
            />
                男性
            </label>
            <label>
            <input
                type="radio"
                value="female"
                onChange={handleChange}
                checked={gender === 'female'}
            />
            女性
            </label>
        </>
    );
};
