import React, { useState, useEffect } from 'react'
import SaveModal from '../components/SaveModal';

const Timer = () => {

  const [timer, setTimer] = useState(false);
  const [restartTimer, setRestartTimer] = useState(false);
  const [startDisable, setStartDisable] = useState(true);
  const [pauseDisable, setPauseDisable] = useState(false);
  const [saveDisable, setSaveDisable] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [seconds, setSeconds] = useState(0);


  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");

  useEffect(() => {
    let interval;

    if (timer) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const Hours = Math.floor(seconds / 3600);
  const Minutes = Math.floor((seconds % 3600) / 60);
  const Seconds = seconds % 60;

  const startTimer = () => {
    setTimer(true)
    setStartDisable(false);
    setPauseDisable(true);
    setSaveDisable(true);
  }
  const PauseTimer = () => {
    setPauseDisable(false);
    setTimer(false)
    setStartDisable(true);
  }

  const handleSave = () => {
    setModalOpen(true);    
    setHour(formatTime(Hours))
    setMin(formatTime(Minutes))
    setSec(formatTime(Seconds))
  }


  const closeModal = (e) => {
    setModalOpen(false);
  }


  return (
    <div className="relative">
      <div className="min-h-screen max-w-full mt-0 mx-auto">
        <div className="flex flex-col justify-center rounded-lg items-center h-[60vh] w-[80vw] mx-auto bg-gray-100 mt-20">
          {!restartTimer === true ? (
            <div className="timerSection flex justify-center text-8xl">
              <p>{formatTime(Hours)}:</p>
              <p>{formatTime(Minutes)}:</p>
              <p>{formatTime(Seconds)}</p>
            </div>
          ) :
            (
              <div className="timerSection flex justify-center text-8xl">
                <p>00:</p>
                <p>00:</p>
                <p>00</p>
              </div>
            )
          }
          <div className="buttonSection flex justify-between items-center mt-10 gap-x-5">

            <button disabled={!setStartDisable} type="button" onClick={startTimer} className={` focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ${startDisable ? "text-white bg-green-700 hover:bg-green-800 cursor-pointer" : "bg-green-200 text-white hover:bg-green-200 cursor-not-allowed"}`}>Start</button>

            <button
              disabled={!pauseDisable}
              onClick={PauseTimer} type="button"
              className={` focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ${pauseDisable ? "text-white bg-red-700 hover:bg-red-800 cursor-pointer" : "bg-red-200 hover:bg-red-200 cursor-not-allowed"}`}>
              Pause
            </button>

            <button onClick={() => handleSave()} disabled={!saveDisable} type="button" className={` ${saveDisable ? "text-white bg-yellow-400 hover:bg-yellow-500" : "text-white bg-yellow-200 hover:bg-yellow-200 cursor-not-allowed"} focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2`}>Save</button>
          </div>
        </div>
      </div>

      {
        modalOpen && saveDisable && (
          <SaveModal closeModal={closeModal} hour={hour} min={min} sec={sec}/>
        )
      }
    </div>
  )
}

export default Timer