import { Button } from '@/components/ui/button';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
export default function Home() {
  return (
    <div>
      <SignedOut>
            <SignInButton mode="modal">
            <Button>Sign IN</Button>
              </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Button variant={"secondary"}>Click me</Button>
              </div>
  );
}
