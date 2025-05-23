const HabitForm = () => {
    return (
        <div>
            <form className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <input type="text" id="habit-name" placeholder="Habit Name" className="bg-white/50 border-gray-500 focus:border-gray-700 border-1 p-2 focus:outline-none" />
                </div>
                <div className="flex flex-col gap-2 h-[300px]">
                    <textarea id="habit-description" placeholder="Habit Description" 
                    className="bg-white/50 border-gray-500 focus:border-gray-700 border-1 p-2 focus:outline-none resize-none h-full"/>
                </div>
            </form>
        </div>
    )
}

export default HabitForm;