import { AiOutlinePlus } from "react-icons/ai";
import {
  Modal,
  ModalContent,
  ToggleButton,
} from "../../common/components/Modal";
import { ChannelForm } from "./ChannelForm";
import { Channel, CreateChannelDto } from "../types";

type ChannelModalProps = {
  channels: Channel[];
};

export const ChannelModal = (props: ChannelModalProps) => {
  return (
    <Modal>
      <ToggleButton className="mt-2 flex items-center gap-2">
        <span className="grid h-5 w-5 place-content-center rounded-md bg-white/10">
          <AiOutlinePlus size={12} />
        </span>
        <span>Add channels</span>
      </ToggleButton>
      <ModalContent>
        <ChannelForm {...props} />
      </ModalContent>
    </Modal>
  );
};
