export const sortListByProp = (list, property: string, sortType: string) => {
  switch (sortType) {
    case 'DESC':
      return [...list.sort((a, b) => (a[property] < b[property]) ? 1 : -1)];
    default:
      return [...list.sort((a, b) => (a[property] > b[property]) ? 1 : -1)];
  }
}
