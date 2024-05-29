import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppButton = ({ chatMessage, statusMessage }) => {
  const mobileStyles = `
    @media (max-width: 768px) {
      .floating-whatsapp-chatbox {
        height: 350px !important;
      }
    }
  `;

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <style>{mobileStyles}</style>
      <FloatingWhatsApp
        phoneNumber="+491738258352"
        accountName="Express Döner"
        avatar="../img/about/express_whatsapp.jpg"
        statusMessage={statusMessage}
        chatMessage={chatMessage}
        placeholder="Type a message..."
        notification
        notificationDelay={10}
        notificationSound
        allowEsc
        allowClickAway
        darkMode={false}
        styles={{
          backgroundColor: 'var(--color-black)',
          color: 'var(--color-white)',
          borderRadius: 'var(--border-radius)',
          boxShadow: 'var(--box-shadow)',
        }}
        className="text-gray-500"
      />
    </div>
  );
};

export default WhatsAppButton;
