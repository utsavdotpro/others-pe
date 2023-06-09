import Toolbar from "@components/Toolbar";
import TabBar from "@components/TabBar";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";
import { BoltIcon, PhotoIcon } from "@heroicons/react/24/outline";

const ScannerScreen: React.FC = () => {
  return (
    <Screen title="Onboarding" safeArea={false}>
      <div className="bg-black bg-opacity-20 pt-safe">
        <Toolbar className="text-white" />
      </div>

      <Container className="flex flex-col items-center min-h-[calc(100vh-76px-env(safe-area-inset-top))] bg-black bg-opacity-20">
        <div className="p-1.5 border-[5px] border-primary-500 mt-8 rounded-[35px]">
          <div className="bg-[#D9D9D9] text-white h-[275px] w-[275px] rounded-3xl flex items-center justify-center text-sm">
            Scan any QR to request
          </div>
        </div>

        <div className="flex-1" />

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
