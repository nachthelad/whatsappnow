"use client";

import { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface WhatsAppFormProps {
  onSendMessage: (phone: string, message: string) => void;
}

export default function WhatsAppForm({ onSendMessage }: WhatsAppFormProps) {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone) {
      return;
    }

    // The phone value already includes the country code
    onSendMessage(phone, message);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (phone) {
        onSendMessage(phone, message);
      }
    }
  };

  const autoResizeTextarea = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px";
  };

  useEffect(() => {
    const textarea = document.getElementById("message") as HTMLTextAreaElement;
    if (textarea) {
      autoResizeTextarea(textarea);
    }
  }, [message]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Phone Number Input */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Número de teléfono
          </label>
          <div className="relative">
            <PhoneInput
              country="ar"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              placeholder="11 6399 8877"
              preferredCountries={[
                "ar",
                "mx",
                "es",
                "co",
                "pe",
                "cl",
                "ve",
                "ec",
                "gt",
                "cu",
                "bo",
                "do",
                "hn",
                "py",
                "sv",
                "ni",
                "cr",
                "pa",
                "uy",
                "gq",
              ]}
              enableSearch={true}
              searchPlaceholder="Buscar país..."
              searchNotFound="No se encontraron países"
              inputProps={{
                name: "",
                required: true,
              }}
              containerStyle={{
                width: "100%",
              }}
              inputStyle={{
                width: "100%",
                height: "48px",
                fontSize: "16px",
                paddingLeft: "70px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              }}
              buttonStyle={{
                border: "none",
                backgroundColor: "#f3f4f6",
                padding: "0 12px",
                borderRadius: "8px 0 0 8px",
                borderRight: "1px solid #e5e7eb",
              }}
              dropdownStyle={{
                backgroundColor: "white",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                maxHeight: "240px",
                overflowY: "auto",
              }}
            />
          </div>
          <p className="text-xs text-gray-500">
            Selecciona tu país e ingresa el número completo
          </p>
        </div>

        {/* Message Input */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Mensaje (opcional)
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            onKeyDown={handleKeyDown}
            rows={4}
            placeholder="Escribí tu mensaje acá..."
            className="input-field resize-none"
          />
          <p className="text-xs text-gray-500">
            Presiona Enter para enviar (Shift+Enter para nueva línea)
          </p>
        </div>

        {/* Send Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="btn-whatsapp w-full text-lg py-3 flex items-center justify-center space-x-2"
            disabled={!phone}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            <span>Enviar mensaje</span>
          </button>
        </div>
      </form>
    </div>
  );
}
