export function getCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    return year + "-" + month + "-" + day;
}