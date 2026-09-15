// import React from "react";
// import { useForm } from "react-hook-form";

// const App = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         {...register("name", {
//           required: "Name is required.",
//           minLength: {
//             value: 3,
//             message: "Minimum 3 characters are required.",
//           },
//           maxLength: {
//             value: 20,
//             message: "Maximum 20 characters can be entered",
//           },
//         })}
//         type="text"
//       />
//       <input
//         {...register("age", {
//           required: "Age is required",
//           valueAsNumber: true,
//           min: {
//             value: 18,
//             message: "Age must be at least 18",
//           },
//           max: {
//             value: 60,
//             message: "Age must be at most 60",
//           },
//         })}
//         type="number"
//       />
//       <input
//         {...register("username", {
//           required: "Username is required.",
//           minLength: {
//             value: 3,
//             message: "Minimum 3 characters are required.",
//           },
//           maxLength: {
//             value: 15,
//             message: "Maximum 15 characters can be entered",
//           },
//           validate: (value) => {
//             return value !== "admin" || "This username is not allowed.";
//           },
//         })}
//         type="text"
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default App;

import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    console.log(data)
  }
  return <form onSubmit={hsndleSubmit(onSubmit)}>
    <input type="text" {...register("name", {
      required: "name is required",
      minLength: {
        value: 3,
        message: "name must contains at least 3 character"
      },
      maxLength: {
        value: 20,
        message: "Name can contains at most 20 character"
      }
    })} />
    {errors.name.message && <p>{errors.name.message}</p>}
    <input type="email" {...register("email", {
      required: "Email is required",
      pattern: {
        value: "",
        message : "Email should be valid"
      }
       
    })}/>
    {errors.email.message && <p>{errors.email.message}</p>}
    <input type="number" {...register("age", {
      required: "Age is required",
      min: {
        value: 18,
        message: "Age must be atleast 18 years."
      },
      max:{
        value: 60,
        message: "Age cannot be more that 60 year"
      } 
    })} />
    {errors.age.message && <p>{errors.age.message}</p>}

  </form>;
};

export default App;
