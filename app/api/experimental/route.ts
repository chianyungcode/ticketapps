import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);

    const idMlbb = searchParams.get("id") || undefined;

    const response = await axios.get(
      `https://v1.apigames.id/merchant/M231231MLXA4141NV/cek-username/mobilelegend?user_id=${idMlbb}&signature=6af939f386d182469c7419fadf56a36f`,
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("API ERROR [GET]: /api/experimental");
  }
};
