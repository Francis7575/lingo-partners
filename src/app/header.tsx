"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { ModeToggle } from "@/components/ModeToggle";

export function Header() {
	const session = useSession();

	return (
		<header>
			<div>
				{session.data ? (
					<Button onClick={() => signOut()}>Sign Out</Button>
				) : (
					<Button onClick={() => signIn("google")}>Sign In</Button>
				)}
			</div>
				<ModeToggle />
		</header>
	)
}