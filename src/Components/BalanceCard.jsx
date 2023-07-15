import React, { useState } from 'react'

const BalanceCard = () => {
    const [visiable, setVisiable] = useState(false);

    return (

        <div className="p-8 gradient-background rounded-t-3xl rounded-b-3xl bg-white text-white">
            <h2 className="text-2xl md:text-3xl">Balance</h2>
            <div className="my-2 flex flex-row justify-between text-2xl md:text-4xl font-bold">
                <h1>{visiable ? "$ 7,893.66" : "$ *****"}</h1>
                {visiable ? (

                    <svg class="w-6 h-6 text-gray-800 dark:text-white" onClick={() => setVisiable(!visiable)}
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z" />
                        <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
                        <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
                    </svg>
                ) : (
                    <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-gray-800 dark:text-white cursor-pointer"
                        onClick={() => setVisiable(!visiable)}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 14"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </div>
            <h3 className="text-sm md:text-2xl">
                Your account Number is{" "}
                <span className="text-md md:text-xl font-semibold">
                    {visiable ? "123-456-1234-789" : "XXX-XXXX-XXXX-XXX"}
                </span>
            </h3>
        </div>


    )
}

export default BalanceCard
