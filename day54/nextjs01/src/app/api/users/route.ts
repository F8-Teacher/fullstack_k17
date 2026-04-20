//export các hàm cùng tên với các HTTP Method

import { NextRequest, NextResponse } from "next/server";

//GET /api/users
const getUsers = (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  console.log(searchParams.get("s"));

  return NextResponse.json([
    {
      id: 1,
      name: "Hoàng An",
    },
  ]);
};

const createUser = async (request: NextRequest) => {
  const body = await request.json();
  console.log(body);

  return NextResponse.json(
    {
      success: true,
    },
    {
      status: 201,
    },
  );
};
export const { getUsers: GET, createUser: POST } = {
  getUsers,
  createUser,
};
