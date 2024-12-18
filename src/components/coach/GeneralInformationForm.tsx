// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Controller } from "react-hook-form";
import Select from "react-select";
import { selectStyle, selectTheme } from "../../styles/selectStyles";
import Input from "../global/Input";

import ImageUploader from "../global/ImageUploader";

type GeneralInformationProps = {
  control: unknown;
  errors: unknown;
  register: unknown;
  setValue: unknown;
  courts: { label: string; value: string }[];
};

const Coachgender = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

const PlayersGender = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Both", label: "Both" },
];

const GeneralInformation = ({
  control,
  errors,
  register,
  setValue,
  courts,
}: GeneralInformationProps) => {
  return (
    <div className="   ">
      <h2 className="text-primary text-lg font-bold pb-5">
        General Information
      </h2>

      <div className="flex flex-row gap-5 justify-between items-baseline">
        <div className="w-full">
          <Controller
            name="name"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  name: "name",
                  type: "name",
                  placeholder: "Coach Name",
                }}
                label={"Coach Name"}
                labelStyle="text-black"
              />
            )}
          />
          {errors.name && errors.name.type === "required" && (
            <p className="text-red-500">{"this Field Is Required"}</p>
          )}
        </div>
        <div className="w-full">
          <Controller
            name="birth_date"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  name: "name",
                  type: "date",
                  placeholder: "birth_date",
                }}
                label={"Birth Date"}
                labelStyle="text-black"
              />
            )}
          />
          {errors.birth_date && errors.birth_date.type === "required" && (
            <p className="text-red-500">{"this Field Is Required"}</p>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-5 py-4 justify-between items-baseline">
        <div className="w-full">
          <label className={`block mb-2 text-sm  `}>
            Coach Gender<span className="text-red-500">*</span>
          </label>
          <Controller
            name="coach_gender"
            rules={{ required: true }}
            control={control}
            render={({ field }) => {
              return (
                <Select
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  {...field}
                  styles={selectStyle}
                  theme={selectTheme}
                  placeholder={"Coach Gender"}
                  options={Coachgender}
                  onChange={(selected) =>
                    field.onChange(selected ? selected.value : null)
                  }
                  value={
                    Coachgender.find(
                      (option) => option.value === field.value
                    ) || null
                  }
                />
              );
            }}
          />
          {errors.coach_gender && errors.coach_gender.type === "required" && (
            <p className="text-red-500">this Field Is Required</p>
          )}
        </div>

        <div className="w-full">
          <label className={`block mb-2 text-sm  `}>
            Players Gender<span className="text-red-500">*</span>
          </label>
          <Controller
            name="player_gender"
            rules={{ required: true }}
            control={control}
            render={({ field }) => {
              return (
                <Select
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  styles={selectStyle}
                  theme={selectTheme}
                  placeholder={"players gender"}
                  {...field}
                  options={PlayersGender}
                  onChange={(selected) =>
                    field.onChange(selected ? selected.value : null)
                  }
                  value={
                    PlayersGender.find(
                      (option) => option.value === field.value
                    ) || null
                  }
                />
              );
            }}
          />
          {errors.player_gender && errors.player_gender.type === "required" && (
            <p className="text-red-500">this Field Is Required</p>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-5  justify-between items-baseline">
        <div className="w-full">
          <label className={`block mb-2 text-sm  `}>
            Courts<span className="text-red-500">*</span>
          </label>
          <Controller
            name="court_ids"
            rules={{ required: true }}
            control={control}
            render={({ field }) => {
              return (
                <Select
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  styles={selectStyle}
                  theme={selectTheme}
                  placeholder={"Courts"}
                  {...field}
                  isMulti={true}
                  options={courts}
                  onChange={(selected) =>
                    field.onChange(
                      selected ? selected.map((option) => option.value) : []
                    )
                  }
                  value={
                    field.value
                      ? courts.filter((option) =>
                          field.value.includes(option.value)
                        )
                      : []
                  }
                />
              );
            }}
          />
          {errors.court_ids && errors.court_ids.type === "required" && (
            <p className="text-red-500">this Field Is Required</p>
          )}
        </div>

        <div className="w-full">
          <Controller
            name="price_per_hour"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  name: "name",
                  type: "number",
                  placeholder: "price per hour",
                }}
                label={"Price Per Hour"}
                icon="AED"
              />
            )}
          />
          {errors.price_per_hour &&
            errors.price_per_hour.type === "required" && (
              <p className="text-red-500">{"this Field Is Required"}</p>
            )}
        </div>
      </div>

      <div className="flex flex-row gap-5 py-4 justify-between items-baseline">
        <div className="w-full">
          <Controller
            name="bio"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  name: "name",
                  type: "text",
                  placeholder: "Bio",
                }}
                label={"Bio"}
                labelStyle="text-black"
              />
            )}
          />
          {errors.bio && errors.bio.type === "required" && (
            <p className="text-red-500">{"this Field Is Required"}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 justify-between items-start ">
        <div className="w-full">
          <Controller
            name="experience"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  name: "experience",
                  type: "number",
                  placeholder: "Experience",
                }}
                label={"Experience"}
                icon="Years"
              />
            )}
          />
          {errors.experience && errors.experience.type === "required" && (
            <p className="text-red-500">{"this Field Is Required"}</p>
          )}
        </div>
        <div className="w-full">
          <Controller
            name="status"
            control={control}
            rules={{ required: "status is required" }}
            render={({ field }) => (
              <div className="flex flex-row md:justify-center items-basline mt-10 gap-8">
                <label className={`mb-2 text-sm font-bold  text-primary`}>
                  Status?
                </label>
                <div className="flex flex-row gap-2 justify-center items-basline">
                  <input
                    className="accent-primary w-5"
                    type="radio"
                    value="available"
                    checked={field.value === "available"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <label className="text-base text-[#66666659]">
                    Avaliable
                  </label>
                </div>
                <div className="flex flex-row gap-2 justify-center items-basline">
                  <input
                    className="accent-primary w-5"
                    type="radio"
                    value="notavailable"
                    checked={field.value === "notavailable"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <label className="text-base text-[#66666659]">
                    Not Avaliable
                  </label>
                </div>
              </div>
            )}
          />
          {errors.status && errors.status.type === "required" && (
            <p className="text-red-500">{"this Field Is Required"}</p>
          )}
        </div>
      </div>
      <ImageUploader register={register} setValue={setValue} />
    </div>
  );
};

export default GeneralInformation;
