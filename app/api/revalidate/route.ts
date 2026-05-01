import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type: string;
  _id: string;
  id?: { current?: string };
};

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
    if (!body?._type) {
      return NextResponse.json({ error: "Missing _type" }, { status: 400 });
    }

    if (body._type === "stelle") {
      revalidatePath("/karriere");
    } else if (body._type === "projekt") {
      revalidatePath("/referenzen");
      revalidatePath("/");
      const projektId = body.id?.current;
      if (projektId) {
        revalidatePath(`/referenzen/${projektId}`);
      }
      revalidatePath("/sitemap.xml");
    }

    return NextResponse.json({ revalidated: true, type: body._type });
  } catch (err) {
    console.error("Revalidate webhook error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
