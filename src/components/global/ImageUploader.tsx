import { useState } from "react";
import CameraSvg from "./SVGs/CameraSvg";

type ImageUploaderProps = {
  register: any;
  setValue: any;
};

const ImageUploader = ({ register, setValue }: ImageUploaderProps) => {
  const [preview, setPreview] = useState("");
  return (
    <div className=" flex flex-row py-4 justify-center items-center gap-2">
      {preview ? (
        <div className="mt-4">
          <img
            src={preview}
            alt="Uploaded"
            className="w-20 h-auto border rounded-md shadow-md"
          />
        </div>
      ) : (
        <CameraSvg />
      )}
      <div className="w-full  text-sm">
        <>
          <input
            type="file"
            id="fileInput"
            // {...field}
            hidden
            {...register("photo")}
            onChange={(e) => {
              const file = e.target.files[0];
              console.log(file);
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  // Set the Base64 string to the form value

                  setPreview(reader.result);
                  setValue("photo", reader.result);
                };
                reader.readAsDataURL(file); // Convert the file to Base64
              }
            }}
          />

          <p className="font-bold">
            Click
            <label
              htmlFor="fileInput"
              className="text-red-500 mx-1 cursor-pointer"
            >
              HERE
            </label>
            to upload a coach photo.
          </p>

          <p className="block  ">390 x 347 Px, PNG, JPG, or Video</p>
        </>

        {/* {errors.photo && errors.photo.type === "required" && (
      <p className="text-red-500">{"this Field Is Required"}</p>
    )} */}
      </div>
    </div>
  );
};

export default ImageUploader;
