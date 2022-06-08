import React from 'react';

export const HomePage = () => {
  return <div>
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">

          <div className="space-y-8">

            <div className="flex flex-row space-x-20 items-end justify-between">
              <div>
                <div className="flex flex-row space-x-3">
                  <div className="font-Raleway text-black text-3xl font-bold">THE</div>
                  <img src="/blackbookmark.png" alt="" className="h-7 w-5 mt-1" />
                </div>
                <div className="font-Raleway text-black text-4xl font-bold">readers</div>
              </div>
              <a href="/search"><img src="/search.png" alt="" className="h-10 w-10 mb-1 w-full" /></a>
            </div>

            <div className="space-y-3">
              <div className="border rounded-md h-56 bg-cover bg-[center_bottom_22rem] bg-[url('https://images.unsplash.com/photo-1633266841047-719b5f737149?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRldGVjdGl2ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60')]">
                <div className="mt-36 ml-8">
                  <div className="text-white font-semibold text-xl">Sherlocks</div>
                  <div className="text-white text-sm">추리소설을 사랑사는 사람들의 모임</div>
                </div>
              </div>
              <div className="space-x-1 flex justify-center">
                <button className="h-2 w-2 bg-gray-400 border rounded-full"></button>
                <button className="h-2 w-2 bg-gray-400 border rounded-full"></button>
                <button className="h-2 w-2 bg-gray-400 border rounded-full"></button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-xl">추리소설 BEST</div>
              <div className="flex flex-row space-x-3">
              <div className="flex flex-row">
                <img src="https://t1.daumcdn.net/cfile/tistory/167D8D114CA5DAB01C" alt=""
                className="w-28 h-36 border rounded-md"/>
              </div>
              <div className="flex flex-row">
                <img src="https://t1.daumcdn.net/cfile/tistory/167D8D114CA5DAB01C" alt=""
                className="w-28 h-36 border rounded-md"/>
              </div>
              <div className="flex flex-row">
                <img src="https://t1.daumcdn.net/cfile/tistory/167D8D114CA5DAB01C" alt=""
               className="w-28 h-36 border rounded-md"/>
              </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-xl">로맨스 BEST</div>
              <div className="flex flex-row space-x-3">
              <div className="flex flex-row">
                <img src="https://t1.daumcdn.net/cfile/tistory/167D8D114CA5DAB01C" alt=""
                className="w-28 h-36 border rounded-md"/>
              </div>
              <div className="flex flex-row">
                <img src="https://t1.daumcdn.net/cfile/tistory/167D8D114CA5DAB01C" alt=""
                className="w-28 h-36 border rounded-md"/>
              </div>
              <div className="flex flex-row">
                <img src="https://t1.daumcdn.net/cfile/tistory/167D8D114CA5DAB01C" alt=""
                className="w-28 h-36 border rounded-md"/>
              </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-xl">에세이 BEST</div>
              <div className="flex flex-row space-x-3">
              <div className="flex flex-row">
                <img src="https://t1.daumcdn.net/cfile/tistory/167D8D114CA5DAB01C" alt=""
               className="w-28 h-36 border rounded-md"/>
              </div>
              <div className="flex flex-row">
                <img src="https://t1.daumcdn.net/cfile/tistory/167D8D114CA5DAB01C" alt=""
               className="w-28 h-36 border rounded-md"/>
              </div>
              <div className="flex flex-row">
                <img src="https://t1.daumcdn.net/cfile/tistory/167D8D114CA5DAB01C" alt=""
                className="w-28 h-36 border rounded-md"/>
              </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  </div>;
};
