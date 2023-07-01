import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <p>
      <UserButton afterSignOutUrl="/" />
    </p>
  );
};

export default SetupPage;
