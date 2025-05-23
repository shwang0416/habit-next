import { Habit, HABIT_SUMMARY_LENGTH } from "../types/habit";

const HabitRow = ({habit}: {habit: Habit}) => {

    return (
<div className="flex flex-row border-t-1 border-green-700 items-center cursor-pointer">
    <div className="flex flex-col w-40 px-2 h-full">
        <p className="flex items-center text-sm break-keep mb-1">{habit.name}</p>
        <span className="text-[11px] text-gray-500">
            {habit.description}
        </span>
    </div>
    <div className="flex flex-row flex-wrap justify-center gap-1 p-2 items-center text-sm bg-lime-200 w-full h-full border-l-1 border-green-700">
        {Array.from({length: HABIT_SUMMARY_LENGTH}).map((_, index) => (
            <div key={index} className="flex items-center justify-center w-8 h-8 bg-lime-100 border-gray-300 text-center text-gray-300 rounded-lg">{index+1}</div>
        ))}
    </div>
</div>
    )
}

export default HabitRow;

