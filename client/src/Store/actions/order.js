import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const purchaseBurger = (orderData, token) => {

  return (dispatch) => {
    dispatch(purchaseBurgerStart());
    axios
      .post(`/order`, orderData, {
        headers: { 'Authorization': `Bearer ${token}` }
      }) //?auth=${token}
      .then((res) => {
        console.log(res.data.data.order._id)
        dispatch(purchaseBurgerSuccess(res.data.data.order._id, orderData));
      })
      .catch((err) => {
        console.log(err.response)
        dispatch(purchaseBurgerFail(err));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FRTCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FRTCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FRTCH_ORDERS_START,
  };
};

export const fetchOrders = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    axios
      .get(`/order/${userId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      }) //?auth=" + token
      .then((response) => {
        dispatch(fetchOrdersSuccess(response.data.data.order));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
