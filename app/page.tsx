"use client";

import { useState } from "react";
import Header from "@/components/Header";
import WhatsAppForm from "@/components/WhatsAppForm";
import DonationSection from "@/components/DonationSection";
import LoadingOverlay from "@/components/LoadingOverlay";
import Notification from "@/components/Notification";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSendMessage = async (phone: string, message: string) => {
    setIsLoading(true);

    try {
      // Validate phone number (should have at least 8 digits including country code)
      if (phone.length < 8) {
        showNotification(
          "El número de teléfono debe tener al menos 8 dígitos",
          "error"
        );
        return;
      }

      // Construct WhatsApp URL
      const whatsappUrl = `https://wa.me/${phone}${
        message ? `?text=${encodeURIComponent(message)}` : ""
      }`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      showNotification("¡WhatsApp abierto! Envía tu mensaje", "success");
    } catch (error) {
      console.error("Error sending message:", error);
      showNotification("Error al abrir WhatsApp", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center bg-fixed"></div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Header />
          <WhatsAppForm onSendMessage={handleSendMessage} />
          <DonationSection />
        </div>
      </div>

      {isLoading && <LoadingOverlay />}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}
