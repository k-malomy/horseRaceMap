export default function RaceCard() {
    return (
        <div className="racecard shrink-0 bg-white border shadow-xl shadow-blue-300/50 rounded-xl">
            <div className="bg-indigo-800 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5">
                <h3 className="text-lg font-bold text-gray-50">
                    朝日杯フューチュリティステークス (GI)
                </h3>
            </div>
            <div className="p-4 md:p-5">
                <p className="mt-2 text-gray-600">
                    4月19日 <br/>
                    阪神競馬場 芝1600m <br />
                    2歳 馬鈴
                </p>
            </div>
            <div className="p-3">
                <div className="w-fit p-1 text-gray-50 text-xs rounded bg-sky-600">
                    3歳牡馬クラシック三冠
                </div>
                <div className="w-fit p-1 text-gray-50 text-xs rounded bg-red-600">
                    サマー2000
                </div>
            </div>
        </div>
    );
}
