"use client";
import AtIcon from "@/components/icons/AtIcon";
import EyeClosedIcon from "@/components/icons/EyeClosedIcon";
import EyeOpenIcon from "@/components/icons/EyeOpenIcon";
import LockIcon from "@/components/icons/LockIcon";
import { cn, swrSDK } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { mutate } from "swr";

interface TResponseErrors {
	fields: string[];
	msg: string;
}

export default function Login() {
	const router = useRouter();
	const [responseErrors, setResponseErrors] =
		useState<TResponseErrors | null>();
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const { LoginUserMutation } = swrSDK;

	async function handleSubmitAction(formData: FormData) {
		const rawFormData = {
			email: formData.get("email"),
			password: formData.get("password"),
		};

		const { LoginUser } = await LoginUserMutation({
			email: rawFormData.email as string,
			password: rawFormData.password as string,
		});

		if (!LoginUser?.success && LoginUser?.fields) {
			setResponseErrors({
				fields: LoginUser.fields as string[],
				msg: LoginUser?.msg as string,
			});
		} else {
			mutate("me-query", LoginUser);
			router.push("/");
		}
	}

	return (
		<main className="flex flex-col items-center justify-between py-12 px-16 lg:px-[16dvw] xl:px-[18dvw]">
			<form
				action={handleSubmitAction}
				className="mx-auto w-3/5 mt-20 min-w-[20rem] space-y-6 max-w-[28rem]"
			>
				<div className="gap-2 flex flex-col-reverse">
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
				<div className="gap-2 flex flex-col-reverse relative">
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
				<button className="btn btn-block btn-secondary">Submit</button>
				<p className="text-sm text-center w-full">
					Don't have an account yet?{" "}
					<Link href={"/register"} className="link link-hover link-accent">
						Register
					</Link>
				</p>
			</form>
		</main>
	);
}
