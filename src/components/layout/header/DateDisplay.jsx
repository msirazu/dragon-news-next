import { format } from "date-fns";

const DateDisplay = () => {
  const date = new Date();
  const formatted = format(date, "EEEE MMMM dd, yyyy");

  return (
  <div>
    {formatted}
    </div>
  )
};

export default DateDisplay;
