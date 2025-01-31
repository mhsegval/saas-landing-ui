import AcmeLogo from "@/assets/logo-acme.png";
import QuantamLogo from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import PulseLogo from "@/assets/logo-pulse.png";
import ApexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image
              src={AcmeLogo}
              alt="AcmeLogo"
              className="logo-ticker-image"
            />
            <Image
              src={QuantamLogo}
              alt="QuantamLogo"
              className="logo-ticker-image"
            />
            <Image
              src={EchoLogo}
              alt="EchoLogo"
              className="logo-ticker-image"
            />
            <Image
              src={CelestialLogo}
              alt="CelestialLogo"
              className="logo-ticker-image"
            />
            <Image
              src={PulseLogo}
              alt="PulseLogo"
              className="logo-ticker-image"
            />
            <Image
              src={ApexLogo}
              alt="ApexLogo"
              className="logo-ticker-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
