export const roundInt = (value: number | undefined):string => {
    if (value) return Math.round(value).toString();
    else return "N";
}
