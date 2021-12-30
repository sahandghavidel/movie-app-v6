import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";

export default function Header() {
  return (
    <div className="p-8 bg-gray-700 text-gray-200 flex flex-col justify-center items-center sm:flex-row justify-between">
      <div className="flex">
        <HeaderIcon Icon={HomeIcon} title="HOME" />
        <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
        <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
        <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
      </div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
        width="100"
        height="100"
      />
    </div>
  );
}
