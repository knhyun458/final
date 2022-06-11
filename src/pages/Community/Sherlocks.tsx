import React, { useState } from 'react';

// 댓글 구현 참고 사이트 https://hymndev.tistory.com/57

export const Sherlcoks = () => {

    const [userName] = useState('email')
    const [comment, setComment] = useState('');
    const [feedComments, setFeedComments] = useState([]);
    const [isValid, setIsValid] = useState(false);
    const post = () => {
        const copyFeedComments = [...feedComments];
        copyFeedComments.push(comment);
        setFeedComments(copyFeedComments);
        setComment('');
    };

    return <div className="flex pt-8 min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto">
            <div className="max-w-md mx-auto space-y-5">
                <div className="flex flex-row space-x-2 items-center">
                    <a href="/"><img src="/back.png" alt="" className="w-6 h-6" /></a>
                    <div>
                        <div className="font-bold text-xl">Sherlokcs</div>
                        <div className="text-xs text-gray-600 font-extralight">추리소설을 사랑하는 사람들의 모임입니다.</div>
                    </div>
                </div>

                <div className="h-screen-15">
                    <div>
                        <div className="text-sm text-gray-600 pl-1 mb-1">email</div>
                        {/* 이메일에 유저 이메일 들어가도록 구현하기 */}
                        <div className="border rounded-md text-black font-light py-3 px-4 w-full text-sm w-fit mb-4">안녕하세요</div>
                        {/* 메세지에 보낸거 들어가도록 구현하기 */}
                    </div>

                </div>

                <div className="flex flex-row space-x-0.5">
                    <input
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Send a message"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 font-extralight text-sm"
                        onChange={e => {
                            setComment(e.target.value);
                        }}
                        onKeyUp={e => {
                            comment.length > 0
                                ? setIsValid(true)
                                : setIsValid(false);
                        }}
                        value={comment}
                    />
                    <button
                        type="button"
                        className={
                            comment.length > 0
                                ? "h-12 bg-black text-white font-light border rounded-md w-20"
                                : "h-12 bg-gray text-white font-light border rounded-md w-20"
                        }
                        onClick={post}
                        disabled={isValid ? false : true}
                    >Send</button>
                </div>


            </div>
        </div>
    </div>
};
