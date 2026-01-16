import { useForm } from "react-hook-form";
// const getData = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         name: "Hoàng An",
//         email: "hoangan.web@gmail.com",
//       });
//     }, 1000);
//   });

export default function Form() {
  const { register, handleSubmit, formState, setValue, getValues } = useForm();
  const { errors, isLoading, isValid } = formState;

  const onSubmit = (data) => {
    console.log(data);
    setValue("name", "");
    setValue("email", "");
  };

  const handleNext = () => {
    const formData = getValues();
    console.log(formData);
  };
  console.log(isValid);

  return (
    <div className="max-w-[80%] mx-auto py-3">
      <h1 className="text-center mb-3 text-3xl">Form Demo</h1>
      {isLoading && <span className="block">Đang tải...</span>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="block mb-1">Tên</label>
          <input
            type="text"
            placeholder="Tên..."
            className="border border-[#ddd] px-2 py-1 w-full"
            {...register("name", {
              required: "Tên bắt buộc phải nhập",
              minLength: {
                value: 2,
                message: "Tên phải từ 2 ký tự",
              },
              validate: (value) => {
                if (value === value.toUpperCase()) {
                  return true;
                }
                return "Tên bắt buộc phải viết hoa";
              },
            })}
          />
          {errors?.name?.message && (
            <span className="text-red-600 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label className="block mb-1">Email</label>
          <input
            type="text"
            placeholder="Email..."
            className="border border-[#ddd] px-2 py-1 w-full"
            {...register("email", {
              required: "Tên bắt buộc phải nhập",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email không đúng định dạng",
              },
            })}
          />
          {errors?.email?.message && (
            <span className="text-red-600 text-sm">{errors.email.message}</span>
          )}
        </div>
        <button
          disabled={!isValid}
          className="mb-3 px-2 py-1 bg-green-900 text-white outline-none disabled:bg-gray-300"
        >
          Submit
        </button>
      </form>
      <hr />
      <button
        className="px-2 py-1 bg-green-900 text-white outline-none mt-3"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}
