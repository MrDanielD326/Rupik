import { Auth } from '@/components/Auth';
import { SignIn } from '@clerk/nextjs';

export default function Page() {
    return <Auth> <SignIn /> </Auth>;
}
