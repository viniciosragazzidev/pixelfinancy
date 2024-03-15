import { signOut } from "@/authentication/auth";

const SignoutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="hidden md:block bg-slate-900 text-slate-200 rounded-md px-2 py-1">
        Sign Out
      </button>
    </form>
  );
};

export default SignoutButton;
