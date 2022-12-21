import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enterAmount = amountRef.current.value;
    const enterAmountToNumber = +enterAmount;
    if (
      enterAmount.trim().length === 0 ||
      enterAmountToNumber < 1 ||
      enterAmountToNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.addToCartHandler(enterAmountToNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label='Amount'
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>please enter valid number (1,5).</p>}
    </form>
  );
};

export default MealItemForm;
