'use client'
import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/navigation"

export default function ProfilePage() {
    const router = useRouter();
    
    return (
        <div>
            <h1 className="text-3xl fonmt-bold mb-6">Profile</h1>
            <button className="hover:cursor-pointer" onClick={() => router.push(PAGES.HOME)}>Go to home</button>
        </div>
    )
}
