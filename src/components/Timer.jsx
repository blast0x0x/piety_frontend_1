import { useState, useEffect } from 'react'

export default function Timer({ timeToEnd }) {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const getTimeUntil = () => {
            const deadline = timeToEnd ? parseInt(timeToEnd) * 1000 : 0
            const time = deadline - Date.now()
            if (time < 0) {
                setDays(0)
                setHours(0)
                setMinutes(0)
                setSeconds(0)
            } else {
                const seconds = Math.floor((time / 1000) % 60)
                const minutes = Math.floor((time / 1000 / 60) % 60)
                const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
                const days = Math.floor(time / (1000 * 60 * 60 * 24))
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        }
        const timer = setInterval(getTimeUntil, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [timeToEnd])

    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="rounded-[15px] w-full py-2 text-white flex flex-col items-center justify-center">
                <p className="text-[22px] font-bold text-[#EAB208] font-bold">{days < 10 ? 0 : Math.floor(days / 10)}{days % 10}</p>
                <p
                    className="text-[#e5e7eb] font-bold text-base font-light leading-[16px]
                        text-[14px]
                    "
                    style={{ letterSpacing: '2px' }}
                >
                    Days
                </p>
            </div>
            <div className="rounded-[15px] w-full py-2 text-white flex flex-col items-center justify-center">
                <p className="text-[22px] font-bold text-[#EAB208] font-bold">{hours < 10 ? 0 : Math.floor(hours / 10)}{hours % 10}</p>
                <p
                    className="text-[#e5e7eb] font-bold text-base font-light leading-[16px]
                        text-[14px]
                        "
                    style={{ letterSpacing: '2px' }}
                >
                    Hours
                </p>
            </div>
            <div className="rounded-[15px] w-full py-2 text-white flex flex-col items-center justify-center">
                <p className="text-[22px] font-bold text-[#EAB208] font-bold">{minutes < 10 ? 0 : Math.floor(minutes / 10)}{minutes % 10}</p>
                <p
                    className="text-[#e5e7eb] font-bold text-base font-light leading-[16px]
                        text-[14px]
                       "
                    style={{ letterSpacing: '2px' }}
                >
                    Minutes
                </p>
            </div>
            <div className="rounded-[15px] w-full py-2 text-white flex flex-col items-center justify-center">
                <p className="text-[22px] font-bold text-[#EAB208] font-bold">{seconds < 10 ? 0 : Math.floor(seconds / 10)}{seconds % 10}</p>
                <p
                    className="text-[#e5e7eb] font-bold text-base font-light leading-[16px]
                        text-[14px]
                        "
                    style={{ letterSpacing: '2px' }}
                >
                    Seconds
                </p>
            </div>
        </div>
    )
}
