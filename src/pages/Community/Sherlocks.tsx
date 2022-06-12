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

    useEffect(() => {
        const roomsData = axios
            .get(`http://localhost:1337/api/rooms/${id}?populate=*`)
            .then((res) => {
                setMessages(res.data.data.attributes.messages.data);
                const title = res.data.data.attributes.title;
                const description = res.data.data.attributes.description;
                setRoomTitle(title);
                setRoomDetail(description);
            });
    }, []);


    return <div className="flex pt-8 min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto">
            <div className="max-w-md mx-auto space-y-5">
                <div className="flex flex-row space-x-2 items-center">
                    <a href="/"><img src="/back.png" alt="" className="w-6 h-6" /></a>
                    <div>
                        <div className="font-bold text-xl">{roomTitle}</div>
                        <div className="text-xs text-gray-600 font-extralight">{roomDetail}</div>
                    </div>
                </div>

                <div className="h-screen-15">
                    <div>
                        {messages.map((msg: any) => {
                            console.log(msg)
                            if (msg.attributes.username === localStorage.getItem('username')) {
                                return (<div key={msg.id}>
                                    <div className="text-xl text-teal-900 m-5 bg-teal-100 rounded-l p-3">
                                        <h1>내꺼 {msg.username} {msg.attributes.content}</h1>
                                    </div>
                                </div>)
                            } else {
                                return (<div key={msg.id}>
                                    <div className="text-xl text-teal-900 m-5 bg-teal-100 rounded-l p-3">
                                        <h1>{msg.username} {msg.attributes.content}</h1>
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
                    />
                    <button
                        type="button"
                        className="h-12 bg-black text-white font-light border rounded-md w-20"
                    >Send</button>
                </div>


            </div>
        </div>
    </div>
};
