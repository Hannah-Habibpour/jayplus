import { todaysDate } from "../../../utilities/utils"

import DayColumn from "./DayColumn"

function DayColumnList({ dateTimeList }) {

  console.log(todaysDate())

  return (
    <div className="grid grid-cols-3 gap-2 w-full justify-between text-center">  
        {Object.entries(dateTimeList).map(([key, value]) => (
            <DayColumn key={key} date={key} timeSlotList={value} />
        ))}
    </div>
  )
}

export default DayColumnList