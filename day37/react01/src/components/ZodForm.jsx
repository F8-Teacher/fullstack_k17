import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
//min() --> Độ dài nhỏ nhất
//max() --> Độ dài lớn nhất

//z.string() --> Kiểm tra dữ liệu có phải string không?
// --> z.string().min(value, options).uppercase()
//z.number() --> Kiểm tra dữ liệu có phải number không?
//z.object() --> Kiểm tra và xác thực 1 object
const schema = z
  .object({
    // name: z
    //   .string()
    //   .min(2, {
    //     message: "Tên phải từ 2 ký tự",
    //   })
    //   .uppercase({
    //     message: "Tên phải viết hoa",
    //   })
    //   .trim(),
    // email: z
    //   .string()
    //   .min(1, {
    //     message: "Email không được để trống",
    //   })
    //   .pipe(
    //     z.email({
    //       message: "Email không đúng định dạng",
    //     })
    //   )
    //   // .refine(
    //   //   async (value) => {
    //   //     return value !== "admin@gmail.com";
    //   //   },
    //   //   {
    //   //     message: "Email không được chứa từ cấm",
    //   //   }
    //   // ),
    //   .superRefine((value, context) => {
    //     if (value === "admin@gmail.com") {
    //       context.addIssue({
    //         code: "custom",
    //         message: "Email này bị cấm",
    //       });
    //     }
    //   }),
    // website: z
    //   .string()
    //   .min(1, {
    //     message: "Website bắt buộc phải nhập",
    //   })
    //   .pipe(
    //     z.url({
    //       message: "Website không đúng định dạng",
    //     })
    //   ),
    // phone: z
    //   .string()
    //   .regex(/^(0|\+84)\d{9}$/, {
    //     message: "Số điện thoại không đúng định dạng",
    //   })
    //   .optional()
    //   .nullable(),
    // status: z.enum(["", "active", "inactive"], {
    //   message: "Trạng thái không hợp lệ",
    // }),
    // password: z.string().min(1, {
    //   message: "Mật khẩu bắt buộc phải nhập",
    // }),
    // confirmPassword: z.string().min(1, {
    //   message: "Xác nhận mật khẩu bắt buộc phải nhập",
    // }),
    age: z.coerce
      .number()
      .gte(18, {
        message: "Tuổi phải từ 18",
      })
      .lte(50, {
        message: "Tuổi không được lớn hơn 50",
      }),
  })
  .superRefine(({ password, confirmPassword }, context) => {
    if (password !== confirmPassword) {
      context.addIssue({
        code: "custom",
        message: "Xác nhận mật khẩu không khớp",
        path: ["confirmPassword"],
      });
    }
  });
export default function ZodForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-[80%] mx-auto py-3">
      <h1 className="text-center mb-3 text-3xl">Zod Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="block mb-1">Tên</label>
          <input
            type="text"
            placeholder="Tên..."
            className="border border-[#ddd] px-2 py-1 w-full"
            {...register("name")}
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
            {...register("email")}
          />
          {errors?.email?.message && (
            <span className="text-red-600 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label className="block mb-1">Website</label>
          <input
            type="text"
            placeholder="Website..."
            className="border border-[#ddd] px-2 py-1 w-full"
            {...register("website")}
          />
          {errors?.website?.message && (
            <span className="text-red-600 text-sm">
              {errors.website.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="block mb-1">Số điện thoại</label>
          <input
            type="text"
            placeholder="Điện thoại..."
            className="border border-[#ddd] px-2 py-1 w-full"
            {...register("phone")}
            onKeyDown={(e) => {
              //Chặn bàn phím
              console.log(e.target.value);
            }}
          />
          {errors?.phone?.message && (
            <span className="text-red-600 text-sm">{errors.phone.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label className="block mb-1">Trạng thái</label>
          <select
            className="border border-[#ddd] px-2 py-1 w-full"
            {...register("status")}
          >
            <option value="">Chọn trạng thái</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          {errors?.status?.message && (
            <span className="text-red-600 text-sm">
              {errors?.status.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="block mb-1">Mật khẩu</label>
          <input
            type="password"
            placeholder="Mật khẩu..."
            className="border border-[#ddd] px-2 py-1 w-full"
            {...register("password")}
          />
          {errors?.password?.message && (
            <span className="text-red-600 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="block mb-1">Nhập lại mật khẩu</label>
          <input
            type="password"
            placeholder="Nhập lại mật khẩu..."
            className="border border-[#ddd] px-2 py-1 w-full"
            {...register("confirmPassword")}
          />
          {errors?.confirmPassword?.message && (
            <span className="text-red-600 text-sm">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="block mb-1">Tuổi</label>
          <input
            type="number"
            placeholder="Tuổi..."
            className="border border-[#ddd] px-2 py-1 w-full"
            {...register("age")}
          />
          {errors?.age?.message && (
            <span className="text-red-600 text-sm">{errors.age.message}</span>
          )}
        </div>
        <button className="mb-3 px-2 py-1 bg-green-900 text-white outline-none disabled:bg-gray-300">
          Submit
        </button>
      </form>
    </div>
  );
}
