import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, TeaBlock, TeaLoadingBlock, Slider } from '../components';

import { fetchTeas } from '../redux/actions/teas';
import { setCategory, setSortBy } from '../redux/actions/filters';

const categoryNames = ['Зеленый', 'Красный', 'Белый', 'Улун', 'Пуэр'];
const sortIems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const ContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ teas }) => teas.items);
  const isLoaded = useSelector(({ teas }) => teas.isLoaded);
  const cartItems = useSelector(({ cart }) => cart.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchTeas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddTeaToCart = (obj) => {
    dispatch({
      type: 'ADD_TEA_CART',
      payload: obj,
    });
  };

  return (
    <Container>
      <Slider />
      <ContentTop>
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortIems}
          onClickSortType={onSelectSortType}
        />
      </ContentTop>
      <ContentItems>
        {isLoaded
          ? items.map((obj) => (
              <TeaBlock
                onClickAddTea={handleAddTeaToCart}
                key={obj.id}
                {...obj}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <TeaLoadingBlock key={index} />)}
      </ContentItems>
    </Container>
  );
}

export default Home;
