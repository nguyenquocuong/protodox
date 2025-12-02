import Link from "next/link";

export default function TermsAndPrivacy() {
  return (
    <p className="text-center text-xs text-primary dark:text-gray-300">
      By continuing, you agree to Ficro&apos;s{" "}
      <Link href="/terms" className="underline">
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link href="/privacy" className="underline">
        Privacy Policy
      </Link>
      .
    </p>
  );
}
