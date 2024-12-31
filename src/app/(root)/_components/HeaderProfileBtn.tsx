"use client";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

function HeaderProfileBtn() {
	return (
		<>
			<UserButton>
				<UserButton.MenuItems>
					<UserButton.Link
						label="Profile"
						labelIcon={<User className="size-4" />}
						href="/profile"
					/>
				</UserButton.MenuItems>
			</UserButton>

			<SignedOut>
				<div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg opacity-100 transition-opacity group-hover:opacity-90 px-4 py-1.5 text-sm text-nowrap">
					<SignInButton />
				</div>
			</SignedOut>
		</>
	);
}
export default HeaderProfileBtn;