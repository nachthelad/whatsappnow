import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { phone, message } = await request.json();

    if (!phone) {
      return NextResponse.json(
        { error: "Número de teléfono requerido" },
        { status: 400 }
      );
    }

    // Clean phone number (should include country code)
    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length < 8) {
      return NextResponse.json(
        {
          error:
            "El número debe tener al menos 8 dígitos incluyendo el código de país",
        },
        { status: 400 }
      );
    }

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
      message || ""
    )}`;

    return NextResponse.json({
      success: true,
      url: whatsappUrl,
      message: "URL de WhatsApp generada correctamente",
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
