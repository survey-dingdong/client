import { Box, OutlinedInput } from "@mui/material";
import React from "react";

const AddressForm = () => {
  const [address, setAddress] = React.useState<string>("");
  const [detailAddress, setDetailAddress] = React.useState<string>("");

  const execDaumPostcode = () => {
    new (window as any).daum.Postcode({
      oncomplete: (data: any) => {
        let addr = "";
        let extraAddr = "";

        if (data.userSelectedType === "R") {
          addr = data.roadAddress;
        } else {
          addr = data.jibunAddress;
        }

        if (data.userSelectedType === "R") {
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }

          if (data.buildingName !== "" && data.apartment === "Y") {
            extraAddr +=
              extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
          }

          if (extraAddr !== "") {
            extraAddr = ` (${extraAddr})`;
          }
        }

        setAddress(addr);
      },
    }).open();
  };

  return (
    <Box display="flex" gap={2} mt={0.5}>
      <OutlinedInput
        fullWidth
        readOnly
        placeholder="기본 주소(필수)"
        onClick={execDaumPostcode}
        value={address}
      />
      <OutlinedInput
        fullWidth
        value={detailAddress}
        placeholder="상세 주소(선택)"
        onChange={(e) => setDetailAddress(e.target.value)}
      />
    </Box>
  );
};

export default AddressForm;
