import { default as dayjs } from "dayjs";

/**
 * formatDate
 * @param date
 * @param formatType
 */
export const formatDate = (date: number, formatType: string = "YYYY-MM-DD") => dayjs(date).format(formatType);
