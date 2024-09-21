import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "../components/ui/form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

import { FcGoogle } from "react-icons/fc";
import { IoLogoTwitter } from "react-icons/io";
import { FaMeta } from "react-icons/fa6";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { useLocation, useNavigate } from "react-router-dom";

const authBtns = [
  { icon: <FcGoogle />, name: "google", link: "/" },
  { icon: <FaMeta />, name: "meta", link: "/" },
  { icon: <IoLogoTwitter />, name: "twitter", link: "/" },
];

export default function useAuthForm({
  submitBtnLabel,
  formTitle,
  formDescription,
  formFields,
  formSchema,
  defaultValues,
  authRedirect,
  plan,
  mutationFn,
}) {
  const { pathname } = useLocation();
  const isLogin = pathname === "/signin";

  const navigate = useNavigate();
  const { toast, dismiss } = useToast();
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: defaultValues,
  });
  const mappedAuthButtons = authBtns.map((btn, idx) => (
    <Button
      key={idx}
      className={`bg-[#f2f2f2] text-black w-28 h-12 text-3xl ${
        btn.name === "meta" || btn.name === "twitter" ? "text-[#1DA1F2]" : ""
      }`}
    >
      {btn.icon}
    </Button>
  ));

  const mappedRadioFields = !isLogin && plan.map((radio) => (
    <FormItem key={radio.id} className="flex items-center space-x-3 space-y-0">
      <FormControl>
        <RadioGroupItem value={radio.type} />
      </FormControl>
      <FormLabel className="font-normal">{radio.type}</FormLabel>
    </FormItem>
  ));

  const mappedFormFields = formFields.map((formField) => (
    <FormField
      key={formField.name}
      control={form.control}
      name={formField.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{formField.label}</FormLabel>
          <FormControl>
            <Input
              placeholder={formField.placeholder}
              type={formField.type}
              {...field}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  ));

  const onSubmit = async (values) => {
    try {
      const res = await mutationFn(values);
      toast({
        title: "Success!",
        description: `Congrats ${values.name}, your account was created`,
      });
      localStorage.setItem("user", JSON.stringify(values));
      setTimeout(() => {
        dismiss();
      }, 2000);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2500);
      console.log("user created successfully", res);
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed!",
        description: "Your account was not created.",
        variant: "destructive",
      });
    }
    console.log("values", values);
  };

  const authForm = (
    <Card className="px-8 py-14 w-[90%] md:w-[500px]">
      <CardHeader className="tracking-wide text-center md:text-left">
        <CardTitle className="pb-3">{formTitle}</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          {formDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            {mappedFormFields}
            <FormField
              control={form.control}
              name="plan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select a plan</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {mappedRadioFields}
                    </RadioGroup>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-center pt-4">
              <hr className="h-3 w-2/4"></hr>
              <p className="w-full text-center text-sm pb-3">
                or continue with
              </p>
              <hr className="h-3 w-2/4"></hr>
            </div>
            <div className="flex justify-center items-center gap-5 pb-4">
              {mappedAuthButtons}
            </div>
            <Button type="submit" className="w-full">
              {submitBtnLabel}
            </Button>
            {authRedirect}
          </form>
        </Form>
      </CardContent>
    </Card>
  );

  return { authForm };
}
