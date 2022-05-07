import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(timezone);
dayjs.extend(localizedFormat);

export default dayjs;
