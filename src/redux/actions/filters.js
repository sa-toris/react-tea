// Action Creator функция которая создает Action работает с динамическими данными в виде объекта и перекидывает в обычный Action

export const setSortBy = ({ type, order }) => ({
  type: 'SET_SORT_BY',
  payload: { type, order },
});

export const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});
