import React from 'react';

export const SearchPage = () => {
    return <div className="flex pt-8 min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto">
            <div className="max-w-md mx-auto space-y-5">
                <div className="flex flex-row space-x-2 items-center">
                    <a href="/"><img src="/back.png" alt="" className="w-6 h-6" /></a>
                    <div className="font-bold text-xl">Search</div>
                </div>

                <div>
                    <div className="flex flex-row items-center justify-between">
                        <div> <input type="text" name="book" id="bookName" placeholder="Book, writer, or keywords" className="w-full text-gray-400 font-Raleway text-sm border border-white " /></div>
                        <img src="/search.png" alt="" className="w-5 h-5" />
                    </div>
                    <img src="/longblackline.png" alt="" />
                </div>
                <div className="space-x-2">
                <button className="border rounded-md border-gray text-black text-sm px-2 py-1">추리소설</button>
                <button className="border rounded-md border-gray text-black text-sm px-2 py-1">에세이</button>
                <button className="border rounded-md border-gray text-black text-sm px-2 py-1">로맨스</button>
                </div>

               
            </div>
        </div>
    </div>
};
