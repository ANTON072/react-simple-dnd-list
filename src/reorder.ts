function reorder<T>(
  list: T[],
  sourceIndex: number,
  destinationIndex: number
): T[] {
  const targetItem = list[sourceIndex];
  const resArr = list.map((target, i) => (i === sourceIndex ? null : target));
  resArr.splice(destinationIndex, 0, targetItem);
  return resArr.flatMap((target) => (target !== null ? [target] : []));
}

export default reorder;
