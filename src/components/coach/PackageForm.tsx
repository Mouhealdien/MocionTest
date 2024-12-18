import { Controller } from "react-hook-form";
import Select from "react-select";
import { selectStyle, selectTheme } from "../../styles/selectStyles";
import Input from "../global/Input";
import AddSvg from "../global/SVGs/AddSvg";

type PackagesFormProps = {
  fields: any;
  append: any;
  remove: any;
  control: any;
  errors: any;
};

const PackageForm = ({
  fields,
  append,
  remove,
  control,
  errors,
}: PackagesFormProps) => {
  const courtTypeOptions = [
    { value: "Indoor", label: "Indoor" },
    { value: "Outdoor", label: "Outdoor" },
  ];

  return (
    <div className="">
      <h2 className="text-primary text-lg font-bold">Create Package</h2>
      {fields.map((field, index) => (
        <div key={field.id} className=" py-4 ">
          <div className="flex flex-row gap-5 justify-between">
            <div className="w-full">
              <Controller
                control={control}
                name={`packages.${index}.name`}
                rules={{ required: "Package name is required" }}
                render={({ field }) => (
                  <Input
                    inputProps={{
                      ...field,
                      placeholder: "Package Name",
                      type: "text",
                    }}
                    label={"Package Name"}
                    labelStyle="text-black"
                  />
                )}
              />
              {errors.packages?.[index]?.name && (
                <p className="text-red-500">
                  {errors.packages[index].name.message}
                </p>
              )}
            </div>

            <div className="flex flex-row"></div>

            <div className="w-full">
              <Controller
                control={control}
                name={`packages.${index}.validity`}
                rules={{ required: "Validity is required" }}
                render={({ field }) => (
                  <Input
                    inputProps={{
                      ...field,
                      placeholder: "Validity",
                      type: "date",
                    }}
                    label={"Validity"}
                    labelStyle="text-black"
                  />
                )}
              />
              {errors.packages?.[index]?.validity && (
                <p className="text-red-500">
                  {errors.packages[index].validity.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-row justify-between gap-5 mt-5">
            <div className="w-full">
              <label className="block text-sm mb-2">
                Court Type<span className="text-red-500">*</span>
              </label>
              <Controller
                control={control}
                name={`packages.${index}.court_type`}
                rules={{ required: "Court type is required" }}
                render={({ field }) => (
                  <Select
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    {...field}
                    styles={selectStyle}
                    theme={selectTheme}
                    options={courtTypeOptions}
                    placeholder="Select"
                    onChange={(selected) =>
                      field.onChange(selected ? selected.value : null)
                    }
                    value={
                      courtTypeOptions.find(
                        (option) => option.value === field.value
                      ) || null
                    }
                  />
                )}
              />
              {errors.packages?.[index]?.court_type && (
                <p className="text-red-500">
                  {errors.packages[index].court_type.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <Controller
                control={control}
                name={`packages.${index}.sessions`}
                rules={{ required: "Sessions count is required" }}
                render={({ field }) => (
                  <Input
                    inputProps={{
                      ...field,
                      placeholder: "Sessions",
                      type: "number",
                    }}
                    label={"Sessions"}
                    icon="Sessions"
                  />
                )}
              />
              {errors.packages?.[index]?.sessions && (
                <p className="text-red-500">
                  {errors.packages[index].sessions.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <Controller
                control={control}
                name={`packages.${index}.price`}
                rules={{ required: "Price is required" }}
                render={({ field }) => (
                  <Input
                    inputProps={{
                      ...field,
                      placeholder: "Price",
                      type: "number",
                    }}
                    label={"Price"}
                    icon="USD"
                  />
                )}
              />
              {errors.packages?.[index]?.price && (
                <p className="text-red-500">
                  {errors.packages[index].price.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <Controller
                control={control}
                name={`packages.${index}.vat`}
                rules={{ required: "VAT is required" }}
                render={({ field }) => (
                  <Input
                    inputProps={{
                      ...field,
                      placeholder: "VAT",
                      type: "number",
                    }}
                    label={"VAT"}
                    icon="%"
                  />
                )}
              />
              {errors.packages?.[index]?.vat && (
                <p className="text-red-500">
                  {errors.packages[index].vat.message}
                </p>
              )}
            </div>
            {/* <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-500 hover:underline bg-red-600 px-2 py-2 rounded-md mt-6"
            >
              <MdDelete color="white" />
            </button> */}
          </div>
        </div>
      ))}

      <div className="flex flex-row gap-5 items-center mt-5">
        <p className="text-primary font-bold text-sm">Create Another Package</p>
        <button
          type="button"
          onClick={() =>
            append({
              name: "",
              validity: "",
              court_type: "Indoor",
              sessions: 0,
              price: 0,
              vat: 0,
            })
          }
          className="bg-primary text-white px-2 py-2 rounded "
        >
          <AddSvg />
        </button>
      </div>
    </div>
  );
};

export default PackageForm;
