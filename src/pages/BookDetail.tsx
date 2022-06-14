import axios from 'axios';
import { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory, useParams } from 'react-router-dom';

interface MatchParams {
    id: string;
}

export function BookDetail({ match }: RouteComponentProps<MatchParams>) {
    const { push } = useHistory();
    const { id } = match.params;
    const [bookTitle, setBookTitle] = useState('');
    const [bookCategory, setBookCategory] = useState('');
    const [bookWriter, setBookWriter] = useState('');
    const [bookRate, setBookRate] = useState([]);
    const [bookDescription, setBookDescription] = useState('');
    const [bookImage, setBookImage] = useState('');
    const [bookReview, setBookReview] = useState([]);
    const [bookTag, setBookTag] = useState([]);
    const [content, setContent] = useState('');
    const [reviewUser, setReviewUser] = useState('');

    const addReview = () => {
        if (content != '') {
            axios
                .post('http://localhost:1337/api/comments', {
                    data: {
                        commentContent: content,
                        book: +id,
                        author: 1,
                    },
                })
                .then((response) => {
                    // Handle success.

                    window.location.reload();
                })
                .catch((error) => {
                    // Handle error.
                    console.log('An error occurred:', error.response);
                });
        }
    };
    const addTag = () => {
        if (content != '') {
            axios
                .post('http://localhost:1337/api/tags', {
                    data: {
                        tagName: content,
                        book: +id,
                        author: 1,
                    },
                })
                .then((response) => {
                    // Handle success.

                    window.location.reload();
                })
                .catch((error) => {
                    // Handle error.
                    console.log('An error occurred:', error.response);
                });
        }
    };
    // rating 함수 구현
    // const score = (a : number) => {
    //     if(a===1){
    //     axios
    //         .put('http://localhost:1337/api/books/:id', {
    //             data:{
    //                 bookRate : 1
    //             }
    //         })
    //     }; if(a===2){
    //         axios
    //             .post('http://localhost:1337/api/ratings', {
    //                 data:{
    //                     bookRate : 2
    //                 }
    //             })
    //         }; if(a===3){
    //             axios
    //                 .post('http://localhost:1337/api/ratings', {
    //                     data:{
    //                         bookRate : 3
    //                     }
    //                 })
    //             }; if(a===4){
    //                 axios
    //                     .post('http://localhost:1337/api/ratings', {
    //                         data:{
    //                             bookRate : 4
    //                         }
    //                     })
    //                 }; if(a===5){
    //                     axios
    //                         .post('http://localhost:1337/api/ratings', {
    //                             data:{
    //                                 bookRate : 5
    //                             }
    //                         })
    //                     };

    // };

    // function average(arr: string | any[]) {
    //     var answer = 0;
    //     let sum = 0;

    //     for (let i = 0; i < arr.length; i++) {
    //         sum += arr[i];   // 배열의 요소들을 하나씩 더한다.
    //     }
    //     return answer = sum / arr.length; // 더한 값과 배열의 길이(=요소 갯수)를 나눈다.
    // }


    useEffect(() => {
        const bookData = axios
            .get(`http://localhost:1337/api/books/${id}?populate=*`)
            .then((res) => {
                console.log(res);
                console.log(res.data.data);
                const book = res.data.data.attributes;
                setBookTitle(book.bookName);
                setBookDescription(book.bookDescription);
                setBookCategory(book.category.data.attributes.categoryName);
                setBookImage(book.bookThumbnail);
                setBookWriter(book.bookWriter);
                setBookReview(book.comments.data[0].attributes.commentContent);
                setReviewUser(book.comments.data[0].attributes.user);
                setBookRate(book.ratings.data[0].attributes.ratingScore);
                setBookTag(book.tags.data[0].attributes.tagName);
                console.log(book.category)
            });
    }, []);

    return <div className="flex pt-8 min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto">
            <div className="max-w-md mx-auto space-y-5">
                <div className="flex flex-row space-x-2 items-center">
                    <a href="/"><img src="/back.png" alt="" className="w-6 h-6" /></a>
                </div>

                <div className="flex flex-row space-x-3">
                    <img src={bookImage} alt="" className="w-32 h-40 rounded border" />
                    <div>
                        <div className="text-gray text-xs font-light">{bookCategory}</div>
                        <div className="flex space-x-3 items-center justify-between">
                            <div className="flex space-x-2 items-center">
                                <div className="text-black text-lg font-bold ">{bookTitle}</div>
                                <div className="text-black text-xs font-bold">{bookWriter}</div>
                            </div>
                            <div className="flex flex-row items-center space-x-1">
                                <img src="/yellowstar.png" alt="" className="w-5 h-5" />
                                <div className="text-sm">{bookRate}</div>
                            </div>
                        </div>

                        <div className="mt-1 text-gray text-xs font-light  truncate-5-lines">{bookDescription}</div>

                        <div className="border rounded-xl text-sm px-2 py-1 w-fit mt-2">{bookTag}</div>
                    </div>
                </div>

                <div className="flex justify-center space-x-1">
                    <img src="/star.png" alt="" className="h-5 w-5"
                    // onClick={() => {
                    //     score(1);
                    // }}
                    />
                    <img src="/star.png" alt="" className="h-5 w-5" />
                    <img src="/star.png" alt="" className="h-5 w-5" />
                    <img src="/star.png" alt="" className="h-5 w-5" />
                    <img src="/star.png" alt="" className="h-5 w-5" />
                </div>

                <div className="flex flex-row space-x-0.5 justify-center">
                    <input
                        type="text"
                        name="tag"
                        id="tag"
                        placeholder="Add a tag"
                        className="w-54 px-3 py-1 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 font-extralight text-sm"
                        value={content}
                        onChange={(event) => {
                            setContent(event.target.value);
                        }}
                    />
                    <button
                        type="button"
                        className="h-10 bg-black text-white font-light border rounded-md w-16"
                        onClick={() => {
                            addTag();
                        }}
                    >Add</button>
                </div>
                <div className="border-gray-200 h-0 border w-full"></div>
                <div className="font-bold text-lg ">Review
                    <div className="h-80 items-end">
                        <div className="flex flex-row space-x-2 items-center my-2">
                            {/* <div className="font-bold text-gray-500 text-xs">{reviewUser}</div> */}
                            {/* 유저 불러오기 */}
                            <div className="text-black text-sm font-light border rounded-md py-1 px-2">{bookReview}</div>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-0.5">
                        <input
                            type="text"
                            name="comment"
                            id="comment"
                            placeholder="Add a comment"
                            className="w-full px-3 py-1 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 font-extralight text-sm"
                            value={content}
                            onChange={(event) => {
                                setContent(event.target.value);
                            }}
                        />
                        <button
                            type="button"
                            className="h-10 bg-black text-white font-light border rounded-md w-20"
                            onClick={() => {
                                addReview();
                            }}
                        >Add</button>
                    </div>
                </div>
            </div>

        </div>
    </div>

};
