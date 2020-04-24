export const fetchMenu = () => async (dispatch) => {
    let menu = [];
    // eslint-disable-next-line no-undef
    fetch('http://demo1569567.mockable.io/Menu')
      .then((res) => res.json())
      .then((data) => {
        menu = data;
        dispatch({ type: 'FETCH_MENU', payload: menu });
      })
      .catch((error) => error);
  };
  
  export const addProduct = (product) => (dispatch) => {
    dispatch({
        type: 'ADD_PRODUCT',
        payload : product,
      });
  }

export const onSearch = (key) => (dispatch) =>{
    dispatch({
        type: 'ON_SEARCH',
        payload : key,
      });
}