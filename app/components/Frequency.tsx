export default function Frequency() {
    let date = new Date();
    let today = date.getDay();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return (
        <div className="flex flex-row gap-4 items-center text-black">
            <select title="weekday" name="weekday" id="weekday" value={days[today]}>
                {days.map((day, index) => {
                    return <option key={index} value={day}>{day}</option>
                })}
            </select>
            <select title="time" name="time" id="time">
                <option value="morning">Morning (8am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 4pm)</option>
                <option value="evening">Evening (4pm - 8pm)</option>
            </select>
        </div>
    )
}