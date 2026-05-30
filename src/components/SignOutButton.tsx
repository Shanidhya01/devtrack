"use client"

import { useState } from "react"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function SignOutButton() {
<<<<<<< HEAD
    const [signingOut, setSigningOut] = useState(false)
    const [confirming, setConfirming] = useState(false)

    const handleSignOut = async () => {
        setSigningOut(true)

        try {
            await signOut({ callbackUrl: "/" })
        } catch (error) {
            console.error("Sign out error:", error)
            setSigningOut(false)
        }
=======
  const [signingOut, setSigningOut] = useState(false)

  const handleSignOut = async () => {
    setSigningOut(true)
    try {
      await signOut({ callbackUrl: "/" })
    } catch (error) {
      console.error("Sign out error:", error)
      setSigningOut(false)
>>>>>>> 393b334 (fix: add keyboard navigation and ARIA labels for accessibility (closes #1308))
    }
  }

<<<<<<< HEAD
    if (confirming) {
        return (
            <div className="flex items-center gap-2">
                <Button
                    variant="destructive"
                    onClick={handleSignOut}
                    aria-label="Confirm sign out"
                    disabled={signingOut}
                >
                    {signingOut ? "Signing out..." : "Confirm"}
                </Button>

                <Button
                    variant="outline"
                    onClick={() => setConfirming(false)}
                    disabled={signingOut}
                    aria-label="Cancel sign out"
                >
                    Cancel
                </Button>
            </div>
        )
    }

    return (
        <Button
            variant="destructive"
            disabled={signingOut}
            suppressHydrationWarning
            onClick={() => setConfirming(true)}
            aria-label="Sign out"
        >
            {signingOut && (
                <svg
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin text-[var(--foreground)]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />

                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2
                        5.291A7.962 7.962 0 014 12H0c0
                        3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}

            Sign out
        </Button>
    )
}
=======
  return (
    <button
      type="button"
      disabled={signingOut}
      aria-disabled={signingOut}
      aria-busy={signingOut}
      aria-label={signingOut ? "Signing out, please wait" : "Sign out of DevTrack"}
      onClick={handleSignOut}
      className="flex items-center gap-2 rounded-full border border-red-600/50 bg-red-600/80 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {signingOut && (
        <svg
          className="h-4 w-4 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {signingOut ? "Signing out..." : "Sign out"}
    </button>
  )
}
>>>>>>> 393b334 (fix: add keyboard navigation and ARIA labels for accessibility (closes #1308))
