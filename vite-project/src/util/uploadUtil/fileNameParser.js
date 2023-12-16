export function fileNameParser(name) {
    const fileType = name.split('.').pop().toLowerCase();
    console.log(fileType);
    return fileType;
}