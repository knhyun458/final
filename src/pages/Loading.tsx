import React from 'react';

export const Loading = () => {
    return <a href="/login">
    <div className="min-h-screen bg-white w-full grid place-content-center place-items-center">
        <div className="mb-5">
            <div className="flex flex-row space-x-3">
                <div className="font-Raleway text-black text-3xl">THE</div>
                <img src="/blackbookmark.png" alt="" className='h-7 w-5 mt-1' />
            </div>
            <div className="font-Raleway text-black text-4xl">readers</div>
        </div>
        <img src="/blackline.png" alt="" />
    </div>;
    </a>
};
