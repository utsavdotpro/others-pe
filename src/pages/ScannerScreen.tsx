import Toolbar from "@components/Toolbar";
import TabBar from "@components/TabBar";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";
import { BoltIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { Platform } from "@lib/platform";
import { startQRScan, stopQRScan } from "@lib/barcode-scanner";
import screen from "@constants/screens";
import { useHistory } from "react-router";

const ScannerScreen: React.FC = () => {
  const { replace } = useHistory();

  const onQRCodeScanned = async (data: string) => {
    replace({
      pathname: screen.requestPayment.path,
      state: { qrData: data },
    });
  };

  const startScan = async () => {
    const data = await startQRScan();
    if (data) onQRCodeScanned(data);
  };

  useEffect(() => {
    if (!Platform.isDesktop) startScan();

    return () => {
      stopQRScan();
    };
  }, []);

  return (
    <Screen title="Onboarding" safeArea={false}>
      <div className="bg-black bg-opacity-20 pt-safe">
        <Toolbar className="text-white" />
      </div>

      <Container className="flex flex-col items-center min-h-[calc(100vh-60px-env(safe-area-inset-top))] bg-black bg-opacity-20">
        <div className="p-1.5 border-[5px] border-primary-500 mt-8 rounded-[35px]">
          <div className="bg-white bg-opacity-20 text-white h-[275px] w-[275px] rounded-3xl flex items-center justify-center text-sm">
            Scan any QR to request
          </div>
        </div>

        <div className="flex-1" />

        {/* TODO: enable tab buttons */}
        <TabBar
          className="mb-8"
          items={[
            { label: "Upload QR", Icon: PhotoIcon },
            { label: "Flash On", Icon: BoltIcon },
          ]}
        />
      </Container>
    </Screen>
  );
};

export default ScannerScreen;
