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
    const [bookTag, setBookTag] = useState([]);
    const [comment, setComment] = useState('');
    const [tag, setTag] = useState('');
    const [bookComments, setBookComments] = useState([]);

    // console.log(localStorage.getItem('username'))
    const addReview = () => {
        if (comment != '') {
            axios
                .post('http://localhost:1337/api/comments', {
                    data: {
                        commentContent: comment,
                        book: +id,
                        user: localStorage.getItem('username'),
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
        if (tag != '') {
            axios
                .post('http://localhost:1337/api/tags', {
                    data: {
                        tagName: tag,
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

    useEffect(() => {
        const bookData = axios
            .get(`http://localhost:1337/api/books/${id}?populate=category,comments.user,ratings,tags`)
            .then((res) => {
                const book = res.data.data.attributes;
                setBookTitle(book.bookName);
                setBookDescription(book.bookDescription);
                setBookCategory(book.category.data.attributes.categoryName);
                setBookImage(book.bookThumbnail);
                setBookWriter(book.bookWriter);
                setBookComments(book.comments.data);
                setBookRate(book.ratings.data[0].attributes.ratingScore);
                setBookTag(book.tags.data[0].attributes.tagName);
                // console.log(book.comments.data[0].attributes.commentContent);
                console.log(book.comments.data);
                console.log(comment)

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
                        type="tag"
                        name="tag"
                        id="tag"
                        placeholder="Add a tag"
                        className="w-54 px-3 py-1 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 font-extralight text-sm"
                        value={tag}
                        onChange={(event) => {
                            setTag(event.target.value);
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
                            {bookComments.map((comment: any) => {
                                const { attributes: { commentContent, user } } = comment;
                                console.log('user: ', user)
                                console.log('user.data: ', user.data)
                                console.log('user: ', user)
                                const username = user.data?.attributes?.username
                                return (<div key={comment.id} className="flex flex-row space-x-2 items-center justify-end">
                                    <div className="text-black text-sm font-light border rounded-md py-1 px-2">
                                        {commentContent}
                                    </div>
                                    <div className="text-black text-sm font-light border rounded-md py-1 px-2">{username}</div>
                                </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="flex flex-row space-x-0.5">
                        <input
                            type="comment"
                            name="comment"
                            id="comment"
                            placeholder="Add a comment"
                            className="w-full px-3 py-1 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 font-extralight text-sm"
                            value={comment}
                            onChange={(event) => {
                                setComment(event.target.value);
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
