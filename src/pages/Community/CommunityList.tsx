import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const CommunityList = () => {
    const { push } = useHistory();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const roomsData = axios
            .get('http://localhost:1337/api/rooms')
            .then((res) => {
                console.log(res);
                setRooms(res.data.data);
                console.log(res.data.data);
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
                        <div>
                            {/* <p>rooms</p> */}
                            {rooms.map((room: any) => {
                                return (
                                    <>
                                        {/* <p>room: {room.id}</p> */}
                                        <div className={`border rounded-md h-56 bg-cover bg-[center_bottom_22rem] mb-2`}
                                            style={{ backgroundImage: `url('${room.attributes.image}` }}
                                            onClick={() => push(`/community/${room.id}`)}>
                                            <div className="mt-36 ml-8">
                                                <div className="text-white font-semibold text-xl">{room.attributes.title}</div>
                                                <div className="text-white font-light text-sm">{room.attributes.description}</div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};