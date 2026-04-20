"use server";

export const demoAction = async (
  _: {
    message: string;
  },
  formData: FormData,
) => {
  console.log("demoAction");
  const name = formData.get("name");
  const check = name;
  if (!check) {
    return {
      message: "Login failed",
      success: false,
    };
  }
  return {
    message: "Login success",
    success: true,
  };
};
