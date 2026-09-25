import React from "react";
import { useForm } from "react-hook-form";
import { useDispatchContext } from "../context/CartContext";

const Checkout = () => {
  const dispatch = useDispatchContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch({ type: "CLEAR_CART" })
    reset()
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", {
          required: "Name is required",
          validate: {
            validator: (value) => {
              return (
                value.length >= 2 ||
                "Name should contains more than 2 character."
              );
            },
          },
        })}
        type="text"
        placeholder="Enter name"
      />
      {errors.name && <p>{errors.name.message}</p>}
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: "/^[^\s@]+@[^\s@]+\.[^\s@]+$/",
            message: "Pleae write valid email.",
          },
        })}
        type="email"
        placeholder="Enter Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register("address", {
          required: "Address is required.",
        })}
        type="text"
        placeholder="Enter your address"
      />
      {errors.address && <p>{errors.address.message}</p>}

      <button type="submit">
        Done
      </button>
    </form>
  );
};

export default Checkout;
