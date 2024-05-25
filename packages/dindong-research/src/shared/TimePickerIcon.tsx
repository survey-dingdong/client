import Image from "next/image";
import clockIcon from "public/icons/clock.svg";

export function TimePickerIcon() {
  return (
    <Image
      src={clockIcon.src}
      alt="Date picker opening icon"
      width={16}
      height={16}
    />
  );
}
