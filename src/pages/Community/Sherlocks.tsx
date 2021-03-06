import axios from 'axios';
import { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory, useParams } from 'react-router-dom';

interface MatchParams {
    id: string;
}

export function Community({ match }: RouteComponentProps<MatchParams>) {
    const { push } = useHistory();
    const [messages, setMessages] = useState([]);
    const { id } = match.params;
    const [roomTitle, setRoomTitle] = useState('');
    const [roomDetail, setRoomDetail] = useState('');
    const [content, setContent] = useState('');
    const sendMsg = () => {
        if (content != '') {
            axios
                .post('http://localhost:1337/api/messages', {
                    data: {
                        content: content,
                        room: +id,
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
        const roomsData = axios
            .get(`http://localhost:1337/api/rooms/${id}?populate=*`)
            .then((res) => {
                setMessages(res.data.data.attributes.messages.data);
                const room = res.data.data.attributes;
                setRoomTitle(room.title);
                setRoomDetail(room.description);
                console.log(res.data.data.attributes.messages.data);
            });
    }, []);


    return <div className="flex pt-8 min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto">
            <div className="max-w-md mx-auto space-y-5">
                <div className="flex flex-row space-x-2 items-center">
                    <a href="/"><img src="/back.png" alt="" className="w-6 h-6" /></a>
                    <div>
                        <div className="font-bold text-xl">{roomTitle}</div>
                        <div className="text-xs text-gray-600 font-extralight mb-4">{roomDetail}</div>
                    </div>
                </div>

                <div className="h-screen-15">
                    <div>
                        {messages.map((msg: any) => {
                            console.log(msg)
                            if (msg.attributes.username === null) {
                                return (<div key={msg.id} className="flex flex-row space-x-2 items-center justify-end">
                                    <div className="text-black text-sm font-light border rounded-md py-1 px-2 mb-1">
                                        {msg.attributes.content}
                                    </div>

                                </div>)
                            }
                            if (msg.attributes.username !== localStorage.getItem('username') || msg.attributes.username === '') {
                                return (<div key={msg.id} className="flex flex-row space-x-2 items-center my-2">
                                    <div className="font-bold text-gray-500 text-xs">
                                        {msg.attributes.username}
                                    </div>
                                    <div className="text-black text-sm font-light border rounded-md py-1 px-2">
                                        {msg.attributes.content}
                                    </div>
                                </div>)
                            } else {
                                return (<div key={msg.id} className="flex flex-row space-x-2 items-center justify-end">
                                    <div className="text-black text-sm font-light border rounded-md py-1 px-2 mb-1">
                                        {msg.attributes.content}
                                    </div>

                                </div>)
                            }
                        })}
                    </div>

                </div>

                <div className="flex flex-row space-x-0.5">
                    <input
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Send a message"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 font-extralight text-sm"
                        value={content}
                        onChange={(event) => {
                            setContent(event.target.value);
                        }}
                    />
                    <button
                        type="button"
                        className="h-12 bg-black text-white font-light border rounded-md w-20"
                        onClick={() => {
                            sendMsg();
                        }}
                    >Send</button>
                </div>


            </div>
        </div>
    </div>
};
