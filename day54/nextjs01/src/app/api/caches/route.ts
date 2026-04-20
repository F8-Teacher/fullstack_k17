import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (request: NextRequest) => {
  const { type, value } = await request.json();
  if (type === "path") {
    revalidatePath(value);
    return NextResponse.json({
      success: true,
    });
  }
  if (type === "tag") {
    revalidateTag(value, {
      expire: 0,
    });
    return NextResponse.json({
      success: true,
    });
  }
  return NextResponse.json(
    {
      success: false,
    },
    {
      status: 500,
    },
  );
};

//tag, path
