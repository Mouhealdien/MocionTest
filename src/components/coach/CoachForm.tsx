import { useForm, useFieldArray } from "react-hook-form";
import GeneralInformationForm from "./GeneralInformationForm";
import WorkingHoursForm from "./WorkingHoursForm";
import PackageForm from "./PackageForm";

import {
  useCreateCoachMutation,
  useGetCourtsQuery,
} from "../../redux/services/Api";
import { toast } from "react-toastify";
import { convertTo12HourFormat, formatDate } from "../../settings/utils";
import Loader from "../global/Loader";

type FormInput = {
  name: string;
  birth_date: string;
  coach_gender: "Male" | "Female";
  player_gender: "Male" | "Female" | "Both";
  court_ids: number[];
  price_per_hour: number;
  bio: string;
  experience: number;
  status: "available" | "notavailable";
  working_type: "full" | "custom";
  working_hours?: {
    days: number[];
    hour_from: string;
    hour_to: string;
  }[];
  packages: {
    name: string;
    validity: string;
    court_type: "Indoor" | "Outdoor";
    sessions: number;
    price: number;
    vat: number;
  }[];
  photo: unknown;
};

const CoachForm = () => {
  const { data, isLoading } = useGetCourtsQuery("");
  const courts = data?.data?.map((court: { name: string; id: string }) => {
    return { label: court.name, value: court.id };
  });

  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      working_hours: [{ days: [], hour_from: "", hour_to: "" }],
      packages: [
        {
          name: "",
          validity: "",
          court_type: "Indoor",
          sessions: 0,
          price: 0,
          vat: 0,
        },
      ],
    },
  });

  const {
    fields: workingHoursFields,
    append: appendWorkingHours,
    remove: removeWorkingHours,
  } = useFieldArray({
    control,
    name: "working_hours",
  });

  const {
    fields: packagesFields,
    append: appendPackages,
    remove: removePackages,
  } = useFieldArray({
    control,
    name: "packages",
  });

  const [creatCoach] = useCreateCoachMutation();

  const onSubmit = async (formData: FormInput) => {
    const updatedFormData = {
      ...formData,
      birth_date: formatDate(formData.birth_date),
      price_per_hour: +formData.price_per_hour,
      experience: +formData.experience,
      packages: formData.packages.map((pkg) => ({
        ...pkg,
        validity: formatDate(pkg.validity),
        price: +pkg.price,
        vat: +pkg.vat,
        sessions: +pkg.sessions,
      })),
      working_hours:
        formData.working_type == "full"
          ? []
          : formData.working_hours?.map((work) => ({
              ...work,
              hour_from: convertTo12HourFormat(work.hour_from),
              hour_to: convertTo12HourFormat(work.hour_to),
            })),
    };
    console.log(updatedFormData);

    await toast.promise(creatCoach(updatedFormData).unwrap(), {
      pending: "pending",
      success: "success",
      error: "faild",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 md:space-y-6 max-w-[814px] px-5 py-5 "
    >
      {isLoading ? (
        <div className="relative py-[80px]">
          <Loader />
        </div>
      ) : (
        <GeneralInformationForm
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
          courts={courts}
        />
      )}
      <div className="border-b-primary border-dotted border " />

      <WorkingHoursForm
        control={control}
        errors={errors}
        append={appendWorkingHours}
        remove={removeWorkingHours}
        fields={workingHoursFields}
      />
      <div className="border-b-primary border-dotted border " />

      <PackageForm
        control={control}
        errors={errors}
        append={appendPackages}
        remove={removePackages}
        fields={packagesFields}
      />

      <div className="flex flex-row gap-5  justify-end">
        <button
          type="submit"
          className="bg-white text-red-500 px-20 py-2 rounded-full hover:border-red-500 hover:border transition-all duration-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-primary text-white px-20 py-2 rounded-full hover:border-primary hover:bg-white hover:text-primary hover:border transition-all duration-300"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default CoachForm;
