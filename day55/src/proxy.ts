import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/auth.service";
import { makeRefreshToken } from "./actions/auth.action";

export const proxy = async (request: NextRequest) => {
  //Check user
  try {
    await getCurrentUser();
  } catch {
    //TH1: Refresh
    const isRefresh = await makeRefreshToken(false); //cookie() -> set -> response header
    console.log(`isRefresh`, isRefresh);

    //TH2: Redirect login
    if (!isRefresh) {
      const response = NextResponse.redirect(
        new URL("/auth/login", request.nextUrl.origin),
      );
      response.cookies.delete("accessToken");
      response.cookies.delete("refreshToken");
      return response;
    }
    const newToken = isRefresh as { accessToken: string; refreshToken: string };
    const response = NextResponse.next();
    response.cookies.set("accessToken", newToken.accessToken, {
      httpOnly: true,
      maxAge: 3600,
    });
    response.cookies.set("refreshToken", newToken.refreshToken, {
      httpOnly: true,
      maxAge: 86400 * 7,
    });
    return response;
  }
};

export const config = {
  matcher: ["/cart/:path*"],
};
