"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Make sure you import useRouter correctly
import { usePathname } from 'next/navigation'; // Import usePathname correctly
import Homepage from '@/components/home/Homepage';
export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  // useEffect(() => {
  //   // Redirect logic after the page is loaded
  //   const patterns = ['login', 'privacy', 'terms', 's/:name/u/:inviterId', 'g/:name', 's/:bsId', 'wc'];

  //   const matchedPattern = patterns.find((pattern) => pathname.includes(`/${pattern}`));

  //   if (matchedPattern) {
  //     const redirectPath = pathname.replace(`/${matchedPattern}`, `https://dev.gamic.pro/${matchedPattern}`);
  //     router.push(redirectPath);
  //   }
  // }, [pathname, router]);

  return (
    <div className="lg:px-[80px] items-center justify-items-center min-h-screen pt-[1px] m-0 overflow-hidden">
      <Homepage />
    </div>
  );
}
