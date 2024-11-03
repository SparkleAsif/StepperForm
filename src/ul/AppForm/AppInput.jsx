import React from 'react';

const AppInput = ({label, type,className,name,id,value,onChange}) => {
    return (
        <div className='flex flex-col gap-2 w-[80%] mx-auto bg-gray-600 p-5'>
           {label&& <label htmlFor={id}>{label}</label> }
            <input 
            value={value ||""} 
            id={id} 
            name={name}
            type={type} 
            onChange={(e)=>onChange(type === 'number'?parseFloat(e.target.value):e.target.value)} className={`border bg-white text-red-500 p-4 border-red-300 rounded shadow  ${className}`} />
        </div>
    );
};

export default AppInput;



