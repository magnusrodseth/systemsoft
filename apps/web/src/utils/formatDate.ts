import moment from "moment";

const formatDate = (date: string) => moment(date).format("MM/YYYY");

export default formatDate;
