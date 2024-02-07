export const getSliceEntities = (normalizedData) => {
  return normalizedData.reduce((acc, obj) => {
    acc[obj.id] = obj;

    return acc;
  }, {});
};
