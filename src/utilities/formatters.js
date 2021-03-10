export const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    // add 1 to month as they are 0 indexed (e.g January displays 0)
    return `${year}-${month + 1}-${day}`;
}