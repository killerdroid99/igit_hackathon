"use client";
import { swrSDK } from "@/utils";
import Link from "next/link";
import { mutate } from "swr";
import PlusIcon from "./icons/PlusIcon";

function Header() {
  const { useMeQuery, LogoutUserMutation } = swrSDK;
  const { data } = useMeQuery("me-query");

  async function handleLogout() {
    const { LogoutUser } = await LogoutUserMutation();

    mutate("me-query", LogoutUser);
  }

  return (
    <header className="navbar bg-base-100/60 backdrop-blur-md sticky top-0 lg:px-[15dvw] justify-between text-transparent">
      <Link
        href={"/"}
        className="text-2xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text  font-extrabold hover:bg-gradient-to-l drop-shadow-md dropdown-content shadow-red-500"
      >
        Discrude
      </Link>

      <nav className="navbar-end space-x-3 lg:space-x-5">
        {data?.Me?.id ? (
          <>
            <Link
              href={"/add-post"}
              className="btn btn-square btn-sm btn-ghost text-xl text-base-content"
            >
              <PlusIcon />
            </Link>
            <p className="font-bold text-lg text-base-content">
              u/{data.Me.name}
            </p>
            <button className="btn btn-sm btn-error" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href={"/login"} className="btn btn-sm btn-primary">
              Login
            </Link>
            <Link
              href={"/register"}
              className="btn btn-sm btn-accent btn-outline"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
