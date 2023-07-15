import React from 'react'

const TransactionHistory = (props) => {
    const {title,amount,lastDate,status}=props;
    return (
    <div className='py-4'>
      <h1 className='text-xl font-bold'>{title}</h1>
      <div className='flex flex-row justify-between'>
        <h1 >Cash: {amount}</h1>
        <p className='text-gray-400'><span className={`font-bold ${ status=== "Sent" ? "text-red-600": "text-green-600"} `}>{status}</span>  on {lastDate}</p>
      </div>
      <a className='text-blue-600 cursor-pointer'>View Details</a>
    </div>
  )
}

export default TransactionHistory
