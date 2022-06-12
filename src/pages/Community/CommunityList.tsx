import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const CommunityList = () => {
    const { push } = useHistory();
    const [rooms, setRooms] = useState([]);
    const [roomTitle, setRoomTitle] = useState('');
    const [roomDetail, setRoomDetail] = useState('');
    const [roomImage, setRoomImage] = useState('');

    useEffect(() => {
        const roomsData = axios
            .get('http://localhost:1337/api/rooms')
            .then((res) => {
                console.log(res);
                setRooms(res.data.data);
                console.log(res.data.data);
                const room = res.data.data.attributes;
                setRoomTitle(room.title);
                setRoomDetail(room.description);
                setRoomImage(room.image);
            });
    }, []);

    return (
        <div>
            <div className="flex pt-8 min-h-screen bg-white dark:bg-gray-900">
                <div className="container mx-auto">
                    <div className="max-w-md mx-auto space-y-5">
                        <div className="flex flex-row space-x-2 items-center">
                            <a href="/"><img src="/back.png" alt="" className="w-6 h-6" /></a>
                            <div className="font-bold text-xl">Community</div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {rooms.map((room: any) => {
                    return (
                        <div className="border rounded-md h-56 bg-cover bg-[center_bottom_22rem] bg-[url('{roomImage}')]"
                        onClick={() => push(`/coummunity/${room.id}`)}>
                            <div className="mt-36 ml-8">
                                <div className="text-white font-semibold text-xl">{roomTitle}</div>
                                <div className="text-white text-sm">{roomDetail}</div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};