import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  /* 
  store/index.js içerisindeki reduser içerisindeki cart storenı seçer 
  ve cartSlice sayfasının içerisindeki initialState içerindeki totalQuantity datasını 
  çekmiş oluruz
  */
  const toggleCartHanler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHanler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity} </span>
    </button>
  );
};

export default CartButton;
