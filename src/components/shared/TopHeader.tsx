"use client";
import { Icon } from "@iconify-icon/react";

function TopHeader() {
  return (
    <div className="w-full flex flex-row-reverse justify-between h-10 bg-red-950 px-17.5 items-center">
      <div className="flex items-center">
        <p className="mt-0.5 mr-2 text-white text-sm">
          کابل، سرای شهراده، طبقه ۵، دوکان نمبر ۴۵۶
        </p>
        <span className="text-white font-semibold text-sm">: آدرس</span>
      </div>

      <div className="flex items-center">
        <p className="mt-0.5 mr-2 text-white text-sm">(+93) 793150456</p>
        <span className="text-white font-semibold text-sm">: شماره تماس</span>
      </div>

      <div className="flex items-center gap-2">
        {/* WhatsApp */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="streamline-logos:whatsapp-logo-solid"
            width="22"
            height="22"
            style={{ color: "#fff" }}
          />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="grommet-icons:facebook"
            width="22"
            height="22"
            style={{ color: "#fff" }}
          />
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/Aliareya2003"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="ic:baseline-telegram"
            width="26"
            height="26"
            style={{ color: "#fff" }}
          />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="jam:instagram"
            width="24"
            height="24"
            style={{ color: "#fff" }}
          />
        </a>
      </div>
    </div>
  );
}

export default TopHeader;
