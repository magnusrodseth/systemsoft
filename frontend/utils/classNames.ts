/**
 *
 * @param classes
 * @returns
 */
const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default classNames;
