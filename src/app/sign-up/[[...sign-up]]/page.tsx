import { Auth } from '@/components/Auth';
import { SignUp } from '@clerk/nextjs';

export default function Page() {
    return <Auth> <SignUp /> </Auth>;
}
