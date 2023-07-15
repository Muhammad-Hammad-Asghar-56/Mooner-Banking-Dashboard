import React, { useState } from 'react'

const BalanceCard = () => {
    const [visiable, setVisiable] = useState(false);

    return (

        <div className="p-8 gradient-background rounded-t-3xl rounded-b-3xl bg-white text-white">
            <h2 className="text-2xl md:text-3xl">Balance</h2>
            <div className="my-2 flex flex-row justify-between text-2xl md:text-4xl font-bold">
                <h1>{visiable ? "$ 7,893.66" : "$ *****"}</h1>
                {visiable ? (
                    <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-gray-800 dark:text-white cursor-pointer"
                        onClick={() => setVisiable(!visiable)}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 12.58c-1.942 0-3.5-1.683-3.5-3.75S8.058 5.08 10 5.08c1.942 0 3.5 1.683 3.5 3.75s-1.558 3.75-3.5 3.75zm0-6.25c-1.213 0-2.187 1.022-2.187 2.5S8.787 11.38 10 11.38c1.213 0 2.187-1.022 2.187-2.5S11.213 6.33 10 6.33z"
                            clipRule="evenodd"
                        />
                        <path
                            fillRule="evenodd"
                            d="M19.112 9.66C17.198 5.59 14.307 3 10 3 5.693 3 2.802 5.59.888 9.66L2.83 11.25C4.56 7.975 7.348 6 10 6c2.651 0 5.44 1.975 7.17 5.25l1.942-1.59zM10 16.92a6.444 6.444 0 0 1-4.91-2.27l1.893-1.51A4.456 4.456 0 0 0 10 15.08a4.456 4.456 0 0 0 3.017-2.88l1.893 1.51A6.444 6.444 0 0 1 10 16.92z"
                            clipRule="evenodd"
                        />
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
