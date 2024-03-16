"use client";
import AtIcon from "@/components/icons/AtIcon";
import EyeClosedIcon from "@/components/icons/EyeClosedIcon";
import EyeOpenIcon from "@/components/icons/EyeOpenIcon";
import LockIcon from "@/components/icons/LockIcon";
import TickIcon from "@/components/icons/TickIcon";
import UserIcon from "@/components/icons/UserIcon";
import { cn, swrSDK } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { mutate } from "swr";

interface TResponseErrors {
	fields: string[];
	msg: string;
}

export default function Register() {
	const router = useRouter();
	const [responseErrors, setResponseErrors] =
		useState<TResponseErrors | null>();
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const { RegisterUserMutation } = swrSDK;

	async function handleSubmitAction(formData: FormData) {
		const rawFormData = {
			name: formData.get("name"),
			email: formData.get("email"),
			password: formData.get("password"),
			confirmPassword: formData.get("confirmPassword"),
			loginDirectly: formData.get("loginDirectly"),
		};

		if (rawFormData.password !== rawFormData.confirmPassword) {
			setResponseErrors({
				fields: ["password", "confirmPassword"],
				msg: "Passwords don't match",
			});
		} else {
			const { RegisterUser } = await RegisterUserMutation({
				name: rawFormData.name as string,
				email: rawFormData.email as string,
				password: rawFormData.password as string,
				loginDirectly: rawFormData.loginDirectly === "on" ? true : false,
			});

			if (!RegisterUser?.success && RegisterUser?.fields) {
				setResponseErrors({
					fields: RegisterUser.fields as string[],
					msg: RegisterUser?.msg as string,
				});
			} else if (rawFormData.loginDirectly === "on") {
				mutate("me-query", RegisterUser);
				router.push("/");
			} else {
				router.push("/login");
			}
		}
	}

	return (
		<main className="flex flex-col items-center justify-between py-12 px-16 lg:px-[16dvw] xl:px-[18dvw]">
			<form
				action={handleSubmitAction}
				className="mx-auto w-3/5 mt-20 min-w-[20rem] space-y-6 max-w-[28rem]"
			>
				<div className="flex flex-col-reverse gap-2">
					{responseErrors?.fields.includes("name") && (
						<span className="label-text-alt text-error">
							{responseErrors.msg}
						</span>
					)}
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Name"
						autoComplete="on"
						onInput={() => setResponseErrors(null)}
						className={cn(
							"input input-bordered focus-visible:input-secondary w-full peer",
							{
								"input-error": responseErrors?.fields.includes("name"),
							}
						)}
					/>
					<span
						className={cn("text-xl peer-focus-visible:text-secondary", {
							"text-error": responseErrors?.fields.includes("name"),
						})}
					>
						<label htmlFor="name">
							<UserIcon />
						</label>
					</span>
				</div>
				<div className="flex flex-col-reverse gap-2">
					{responseErrors?.fields.includes("email") && (
						<span className="label-text-alt text-error">
							{responseErrors.msg}
						</span>
					)}
					<input
						type="text"
						id="email"
						name="email"
						placeholder="Email"
						autoComplete="on"
						onInput={() => setResponseErrors(null)}
						className={cn(
							"input input-bordered focus-visible:input-secondary w-full peer",
							{
								"input-error": responseErrors?.fields.includes("email"),
							}
						)}
					/>
					<span
						className={cn("text-xl peer-focus-visible:text-secondary", {
							"text-error": responseErrors?.fields.includes("email"),
						})}
					>
						<label htmlFor="email">
							<AtIcon />
						</label>
					</span>
				</div>
				<div className="flex flex-col-reverse gap-2 relative">
					{responseErrors?.fields.includes("password") && (
						<span className="label-text-alt text-error">
							{responseErrors.msg}
						</span>
					)}
					<input
						id="password"
						name="password"
						placeholder="Password"
						autoComplete="new-password"
						onInput={() => setResponseErrors(null)}
						type={isPasswordVisible ? "text" : "password"}
						className={cn(
							"input input-bordered focus-visible:input-secondary w-full peer",
							{
								"input-error": responseErrors?.fields.includes("password"),
							}
						)}
					/>
					<span
						className={cn("text-xl peer-focus-visible:text-secondary", {
							"text-error": responseErrors?.fields.includes("password"),
						})}
					>
						<label htmlFor="password">
							<LockIcon />
						</label>
					</span>
					<div
						className="absolute text-2xl right-2 top-[41px] cursor-pointer"
						onClick={() => setIsPasswordVisible(!isPasswordVisible)}
						title={isPasswordVisible ? "Hide password" : "Show password"}
					>
						{isPasswordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
					</div>
				</div>
				<div className="flex flex-col-reverse gap-2">
					{responseErrors?.fields.includes("confirmPassword") && (
						<span className="label-text-alt text-error">
							{responseErrors.msg}
						</span>
					)}
					<input
						id="confirmPassword"
						name="confirmPassword"
						placeholder="Confirm password"
						autoComplete="new-password"
						onInput={() => setResponseErrors(null)}
						type={isPasswordVisible ? "text" : "password"}
						className={cn(
							"input input-bordered focus-visible:input-secondary w-full peer",
							{
								"input-error":
									responseErrors?.fields.includes("confirmPassword"),
							}
						)}
					/>
					<span
						className={cn("text-xl peer-focus-visible:text-secondary", {
							"text-error": responseErrors?.fields.includes("confirmPassword"),
						})}
					>
						<label htmlFor="confirmPassword">
							<TickIcon />
						</label>
					</span>
				</div>
				<div className="form-control">
					<label className="cursor-pointer label">
						<span className="label-text">Login directly?</span>
						<input
							type="checkbox"
							name="loginDirectly"
							className="toggle toggle-sm toggle-secondary"
						/>
					</label>
				</div>
				<button className="btn btn-block btn-secondary">Submit</button>
				<p className="text-sm text-center w-full">
					Already registered?{" "}
					<Link href={"/login"} className="link link-hover link-primary">
						Login
					</Link>
				</p>
			</form>
		</main>
	);
}
