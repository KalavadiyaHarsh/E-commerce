import React from 'react';

const Progress = (props) => {

  let bgColor = '';

  if (props.type === 'success') {
    bgColor = 'bg-green-600';
  } else if (props.type === 'error') {
    bgColor = 'bg-red-600';
  } else if (props.type === 'warning') {
    bgColor = 'bg-yellow-500';
  } else {
    bgColor = 'bg-blue-600'; // default
  }


  return (
    <div className='w-[150px] h-auto overflow-hidden rounded-md border border-black'>
      <span className={`progress flex items-center  h-[8px]  ${bgColor} `}
        style={{ width: `${props.value}%` }}
      ></span>
    </div>
  );
}

export default Progress;
