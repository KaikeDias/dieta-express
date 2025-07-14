import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface TextFieldProps {
  label: string;
  placeholder: string;
}

function TextField({ label, placeholder }: Readonly<TextFieldProps>) {
  return (
    <div className="grid w-full items-center gap-1">
      <Label htmlFor="name" className="font-semibold">
        {label}
      </Label>
      <Input type="text" id="name" placeholder={placeholder} />
    </div>
  );
}

export default TextField;
