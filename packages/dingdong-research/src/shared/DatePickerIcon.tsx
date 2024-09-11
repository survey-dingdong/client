import Image from "next/image";
import noteTextIcon from "public/icons/note-text.png";

export function DatePickerOpenIcon() {
  return (
    <>
      <Image
        src={noteTextIcon.src}
        alt="Date picker opening icon"
        width={16}
        height={16}
      />
    </>
  );
}
