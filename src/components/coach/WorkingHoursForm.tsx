// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Controller } from "react-hook-form";
import Select from "react-select";
import { selectStyle, selectTheme } from "../../styles/selectStyles";
import AddSvg from "../global/SVGs/AddSvg";
import Input from "../global/Input";
import { useState } from "react";

type WorkingHoursProps = {
  fields: unknown;
  append: unknown;
  remove: unknown;
  control: unknown;
  errors: unknown;
};

const WorkingHours = ({
  fields,
  append,
  remove,
  control,
  errors,
}: WorkingHoursProps) => {
  const daysOptions = [
    { value: 0, label: "Monday" },
    { value: 1, label: "Tuesday" },
    { value: 2, label: "Wednesday" },
    { value: 3, label: "Thursday" },
    { value: 4, label: "Friday" },
    { value: 5, label: "Saturday" },
    { value: 6, label: "Sunday" },
  ];

  const [workType, setWorkType] = useState("full");
  return (
    <div className="">
      <h2 className="text-primary text-lg font-bold">Working Hours</h2>
      <div className="w-full flex items-start ">
        <Controller
          name="working_type"
          control={control}
          rules={{ required: "working type is required" }}
          defaultValue={"full"}
          render={({ field }) => (
            <div className="flex flex-row justify-center items-center mt-10 gap-8">
              <label className={` mb-2 text-sm font-medium text-black `}>
                Working Type?
              </label>
              <div className="flex flex-row gap-2 justify-center items-basline">
                <input
                  className=" accent-primary w-5"
                  type="radio"
                  value="full"
                  checked={field.value === "full"}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    setWorkType(e.target.value);
                  }}
                />
                <label className="text-base text-[#747474]">Full Time</label>
              </div>
              <div className="flex flex-row gap-2 justify-center items-basline">
                <input
                  className=" accent-primary w-5"
                  type="radio"
                  value="custom"
                  checked={field.value === "custom"}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    setWorkType(e.target.value);
                  }}
                />
                <label className="text-base text-[#747474]">Customize</label>
              </div>
            </div>
          )}
        />
      </div>
      {workType == "custom" && (
        <div className="flex flex-row items-end w-full gap-2 mt-5 ">
          <div className="w-full">
            {fields.map((field, index) => (
              <div key={field.id} className="flex space-x-4 items-center mt-5 ">
                <div className="w-full">
                  <label className="block text-sm mb-2">Days</label>
                  <Controller
                    control={control}
                    name={`working_hours.${index}.days`}
                    render={({ field }) => (
                      <Select
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                        {...field}
                        onChange={(selected) =>
                          field.onChange(
                            selected
                              ? selected.map((option) => option.value)
                              : []
                          )
                        }
                        value={
                          field.value
                            ? daysOptions.filter((option) =>
                                field.value.includes(option.value)
                              )
                            : []
                        }
                        isMulti
                        styles={selectStyle}
                        theme={selectTheme}
                        options={daysOptions}
                        placeholder="Select"
                      />
                    )}
                  />
                </div>

                <div className="w-full">
                  <Controller
                    control={control}
                    name={`working_hours.${index}.hour_from`}
                    render={({ field }) => (
                      <Input
                        inputProps={{
                          ...field,
                          type: "time",
                          placeholder: "Hour From",
                        }}
                        label={"Hour From"}
                      />
                    )}
                  />
                </div>

                <div className="w-full">
                  <Controller
                    control={control}
                    name={`working_hours.${index}.hour_to`}
                    render={({ field }) => (
                      <Input
                        inputProps={{
                          ...field,
                          type: "time",
                          placeholder: "Hour To",
                        }}
                        label={"Hour To"}
                      />
                    )}
                  />
                </div>

                {/* <button
            type="button"
            onClick={() => remove(index)}
            className="text-red-500 hover:underline bg-red-600 px-2 py-2 rounded-md mt-6"
          >
            <MdDelete color="white" />
          </button> */}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => append({ days: [], hour_from: "", hour_to: "" })}
            className="bg-primary text-white px-2 py-2 rounded mt-5 w-fit"
          >
            <AddSvg />
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkingHours;
