import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import { ToggleButton, useToggle } from "../../common/components/Modal";
import { Channel, Visibility } from "../types";
import { FaHashtag } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useCreateChannel } from "../hooks/useCreateChannel";
import { useParams } from "react-router-dom";
import { Button } from "../../common/components/Button";

type ChannelFormProps = {
  channels: Channel[];
};

export const ChannelForm = ({ channels }: ChannelFormProps) => {
  const { toggle } = useToggle();
  const { workspaceId } = useParams() as { workspaceId: string };
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [visibility, setVisibility] = useState<Visibility>("public");
  const createChannel = useCreateChannel(workspaceId);

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    try {
      await createChannel.mutateAsync({ name, visibility });
      toggle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid min-h-[15rem] grid-rows-[auto_1fr_auto]"
    >
      {step === 1 ? (
        <FirstStep
          channels={channels}
          name={name}
          setName={setName}
          nextStep={() => setStep(2)}
        />
      ) : (
        <SecondStep
          isLoading={createChannel.isLoading}
          name={name}
          visibility={visibility}
          setVisibility={setVisibility}
          previousStep={() => setStep(1)}
        />
      )}
    </form>
  );
};

type FirstStepProps = {
  channels: Channel[];
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
};

const FirstStep = ({ channels, name, setName, nextStep }: FirstStepProps) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value.trim().toLocaleLowerCase();
    if (value.trim() === "")
      setError(
        "Give your channel a name to continue. You can always change the name later."
      );
    else if (channels.find((channel) => channel.name === value))
      setError(
        "That name is already taken by a channel, username, or user group in this workspace."
      );
    else setError(null);
    setName(value);
  };

  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-black">Create a channel</h2>
        <ToggleButton aria-label="close" className="hover:scale-110">
          <IoClose className="text-slate-500" size={20} />
        </ToggleButton>
      </div>
      <label className="text-black">
        <p className="mb-3">Name:</p>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          className={clsx(
            "w-full rounded-md border px-4 py-2 outline-none",
            !error && "border-slate-300 focus:ring-4  focus:ring-blue-200",
            error && "border-red-600 focus:ring-red-600/50"
          )}
        />
        {error ? (
          <p className="mt-2 flex items-start gap-1 text-sm text-red-600">
            <AiOutlineInfoCircle size={18} className="mt-[2px]" /> {error}
          </p>
        ) : (
          <p className="mt-2 text-xs text-slate-600">
            Channels are where conversations happen around a topic. Use a name
            that is easy to find and understand.
          </p>
        )}
      </label>
      <div className="flex items-center">
        <p className="text-sm text-slate-500">Step 1 of 2</p>
        <Button
          type="button"
          className="ml-auto"
          onClick={nextStep}
          disabled={!!(!name || error)}
          variant="primary"
        >
          Next
        </Button>
      </div>
    </>
  );
};

type SecondStepProps = {
  isLoading: boolean;
  name: string;
  visibility: Visibility;
  setVisibility: Dispatch<SetStateAction<Visibility>>;
  previousStep: () => void;
};

const SecondStep = ({
  isLoading,
  name,
  visibility,
  setVisibility,
  previousStep,
}: SecondStepProps) => {
  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-black">Create a channel</h2>
          <p className="flex items-center gap-1 text-xs text-slate-500">
            {visibility === "public" ? (
              <FaHashtag size={10} />
            ) : (
              <FaLock size={10} />
            )}{" "}
            <span>{name}</span>
          </p>
        </div>
        <ToggleButton aria-label="close" className="hover:scale-110">
          <IoClose className="text-slate-500" size={20} />
        </ToggleButton>
      </div>

      <fieldset className="text-black">
        <legend className="mb-1 font-medium">Visibility</legend>
        <label className="flex cursor-pointer gap-3 text-sm">
          <span>
            <input
              type="radio"
              name="visibility"
              checked={visibility === "public"}
              onChange={() => setVisibility("public")}
            />
          </span>
          <span>Public - anyone in your workspace</span>
        </label>
        <label className="mt-1 flex cursor-pointer items-baseline gap-3 text-sm">
          <span>
            <input
              type="radio"
              name="visibility"
              checked={visibility === "private"}
              onChange={() => setVisibility("private")}
            />
          </span>
          <div>
            <span>Private - only specified people</span>
            <p className="mt-1 text-xs text-slate-600">
              Can only be viewed or joined by invitation
            </p>
          </div>
        </label>
      </fieldset>

      <div className="flex items-center">
        <p className="text-sm text-slate-500">Step 2 of 2</p>
        <Button
          onClick={previousStep}
          variant="secondary"
          type="button"
          className="ml-auto mr-4"
        >
          Back
        </Button>
        <Button variant="primary" isLoading={isLoading}>
          Next
        </Button>
      </div>
    </>
  );
};
