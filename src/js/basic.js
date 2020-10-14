export default function sorting(arr) {
  arr.sort((x, y) => {
    if (x.health > y.health) return -1;
    if (x.health < y.health) return 1;
    return 0;
  });
  return arr;
}
