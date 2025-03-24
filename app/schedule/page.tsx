"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

interface RaceEvent {
  date: string
  class: string
  color: string
}

const raceEvents: RaceEvent[] = [
  { date: "2024-03-20", class: "오리지널 클래스", color: "#FF0700" },
  { date: "2024-03-21", class: "비기너 클래스", color: "#FF6B6B" },
  { date: "2024-03-22", class: "어드밴스드 클래스", color: "#4A90E2" },
  { date: "2024-03-23", class: "스톡클래스", color: "#FFA500" },
  { date: "2024-03-24", class: "오픈클래스", color: "#9B59B6" },
  { date: "2024-03-25", class: "오리지널 클래스", color: "#FFD700" },
  { date: "2024-03-26", class: "비기너 클래스", color: "#FF6B6B" },
]

export default function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월`
  }

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0]
    return raceEvents.filter(event => event.date === dateString)
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = []

    // 이전 달의 날짜들
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square p-1 sm:p-2 lg:p-2.5"></div>)
    }

    // 현재 달의 날짜들
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      const events = getEventsForDate(currentDateObj)
      const dayOfWeek = currentDateObj.getDay()

      days.push(
        <div 
          key={day} 
          onClick={() => setSelectedDate(currentDateObj)}
          className={`aspect-square p-1 sm:p-2 lg:p-2.5 border rounded-lg cursor-pointer hover:bg-gray-50 ${
            dayOfWeek === 0 ? 'bg-red-100' : 
            dayOfWeek === 6 ? 'bg-orange-100' : 
            'bg-white/80'
          } ${selectedDate?.toDateString() === currentDateObj.toDateString() ? 'ring-2 ring-blue-500' : ''}`}
        >
          <div className={`font-semibold mb-1 text-sm sm:text-base ${
            dayOfWeek === 0 ? 'text-red-500' : 
            dayOfWeek === 6 ? 'text-orange-500' : 
            'text-gray-700'
          }`}>
            {day}
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            {events.map((event, index) => (
              <Badge
                key={index}
                variant="outline"
                style={{
                  backgroundColor: `${event.color}10`,
                  color: event.color,
                  borderColor: `${event.color}20`,
                }}
                className="text-[10px] sm:text-xs block truncate"
              >
                {event.class}
              </Badge>
            ))}
          </div>
        </div>
      )
    }

    return days
  }

  const renderEventDetails = () => {
    return (
      <div className="bg-white/90 rounded-lg p-6 shadow-lg h-full">
        {selectedDate ? (
          <>
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일 일정
            </h3>
            <div className="space-y-6">
              {getEventsForDate(selectedDate).map((event, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: event.color }}
                    />
                    <div className="font-bold text-lg">{event.class}</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>19:30</span>
                    </div>
                    
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/track.jpg"
                        alt="트랙 정보"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="font-medium text-gray-800">대회 정보</div>
                      <div className="text-sm text-gray-600">
                        다람쥐 과학 미니4WD 대회
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="font-medium text-gray-800">추가 정보</div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>• 참가 신청 마감: {selectedDate.getMonth() + 1}월 {selectedDate.getDate() - 1}일</p>
                        <p>• 참가비: 10,000원</p>
                        <p>• 장소: 다람쥐 과학 레이싱장</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Calendar className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">날짜를 선택해주세요</h3>
            <p className="text-gray-600">달력에서 날짜를 클릭하면 해당 날짜의 상세 정보를 확인할 수 있습니다.</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#36a785]">
      <Header />
      <main className="flex-grow">
        <div className="w-full mx-auto px-2 sm:px-4 py-4 sm:py-8 bg-[#36a785]">
          <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
            <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4 sm:mb-20 text-[#ffe200] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">대회 일정</h1>
            
            <div className="flex flex-col lg:flex-row justify-center gap-4">
              <div className="grid grid-cols-7 gap-0.5 sm:gap-1 lg:gap-1.5 lg:flex-1 lg:max-w-4xl">
                <div className="col-span-7 flex justify-between items-center mb-2">
                  <Button variant="outline" size="sm" className="text-sm" onClick={previousMonth}>
                    <ChevronLeft className="w-4 h-4 mr-1 sm:mr-2" />
                    이전 달
                  </Button>
                  <h2 className="text-lg sm:text-xl font-semibold text-white/80 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{formatDate(currentDate)}</h2>
                  <Button variant="outline" size="sm" className="text-sm" onClick={nextMonth}>
                    다음 달
                    <ChevronRight className="w-4 h-4 ml-1 sm:ml-2" />
                  </Button>
                </div>
                {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
                  <div 
                    key={day} 
                    className={`text-center font-semibold p-1 sm:p-2 lg:p-2.5 bg-white/80 rounded-lg text-sm sm:text-base ${
                      index === 0 ? 'text-red-500' : 
                      index === 6 ? 'text-orange-500' : 
                      'text-gray-700'
                    }`}
                  >
                    {day}
                  </div>
                ))}
                {renderCalendar()}
              </div>

              {/* 모바일에서는 하단에, 데스크톱에서는 우측에 표시 */}
              <div className="lg:w-96 mt-4 lg:mt-0 ">
                {renderEventDetails()}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 