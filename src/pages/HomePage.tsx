import axios from 'axios';
import { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
interface MatchParams {
  id: string;
}

export const HomePage = ({ match }: RouteComponentProps<MatchParams>) => {
  const { push } = useHistory();
  const { id } = match.params;
  const [rooms, setRooms] = useState([]);
  const [bookImage, setBookImage] = useState('');

  useEffect(() => {
    const roomsData = axios
      .get('http://localhost:1337/api/rooms')
      .then((res) => {
        console.log(res);
        setRooms(res.data.data);
        console.log(res.data.data);
      });
  }, []);

  return (<div>
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
              <div>
                {/* <p>rooms</p> */}
                {rooms.map((room: any) => {
                  return (
                    <>
                      {/* <p>room: {room.id}</p> */}
                      <div className={`border rounded-md h-56 bg-cover bg-[center_bottom_22rem]`}
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
            <div className="space-y-2">
              <div className="font-bold text-xl">추리소설 추천</div>
              <div className="flex flex-row space-x-3">
                <a href="/bookdetail/1"><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131221_95%2Fthsgysmd123_1387554672089DHzj1_JPEG%2F%25B9%25CC%25B3%25AA%25C5%25E4_%25B0%25A1%25B3%25AA%25BF%25A1_-_%25B0%25ED%25B9%25E9.jpg&type=sc960_832" alt=""
                  className="w-28 h-36 border rounded-md" /></a>
                <a href="/bookdetail/6"><img src="https://bookthumb-phinf.pstatic.net/cover/025/038/02503819.jpg?udate=20120316" alt=""
                  className="w-28 h-36 border rounded-md" /></a>
                <a href="/bookdetail/5"><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMjhfMjg0%2FMDAxNjE0NTA0NTExMzky.L7WKDqCBDslbQnkSBL89FD-WX7MKkBJEmNVMe8LFFrEg.k1sK1Mu0yD2bqCVf18xlY9GsN_fjZ8zy-0nyqmNDVKYg.JPEG.jp1324%2Fx9788972754190.jpg&type=sc960_832" alt=""
                  className="w-28 h-36 border rounded-md" /></a>
               <a href="/bookdetail/2"><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210526_223%2F16220042011027vQSQ_JPEG%2F23140035925890603_951049888.jpg&type=sc960_832" alt=""
                  className="w-28 h-36 border rounded-md" /></a>
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-xl">에세이 추천</div>
              <div className="flex flex-row space-x-3">
              <a href="/bookdetail/9"><img src="https://bookthumb-phinf.pstatic.net/cover/214/733/21473397.jpg?udate=20220429" alt=""
                  className="w-28 h-36 border rounded-md" /></a>
                <a href="/bookdetail/10"><img src="https://bookthumb-phinf.pstatic.net/cover/161/083/16108307.jpg?udate=20220414" alt=""
                  className="w-28 h-36 border rounded-md" /></a>
                <a href="/bookdetail/3"><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMDdfMTkz%2FMDAxNjQ0MTcwMjU4ODEz.8IXcZMLv6Q5bVtRfJuss1fBuc5eM4tu1Yt-NEw9MXFUg.rnKjeXYjjHFchb9EdMun73Q-L-0su2Onk-xgstUBHUwg.JPEG.lovecall1243%2F%25B6%25B1%25BA%25BA%25C0%25CC-1.jpg&type=sc960_832" alt=""
                  className="w-28 h-36 border rounded-md" /></a>
                <a href="/bookdetail/4"><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MTBfMjky%2FMDAxNTk5NzE5MjE4MzU0.3W1UGHsnCfosQOZxpgQ2t2vtkcMrmdPJq4p-iZbrDjwg.efnPtJB9GItLL-2GiXMsN5YozSFUSv28HihTdfyQsVAg.JPEG.oey2602%2Foutput_3278560312.jpg&type=sc960_832" alt=""
                  className="w-28 h-36 border rounded-md" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};
