import React from "react";

export const LoaderMedium = () => (
	<svg
		role="status"
		className="inline ml-2 w-8 h-8 text-gray-200 animate-spin fill-blue-600 absolute"
		viewBox="0 0 100 101"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
			fill="currentColor"
		/>
		<path
			d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
			fill="currentFill"
		/>
	</svg>
);

export const ArrowUp = () => (
	<svg
		className="w-6 h-6 rotate-180 shrink-0"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
			clipRule="evenodd"
		/>
	</svg>
);

export const ArrowDown = () => (
	<svg
		className="w-6 h-6 shrink-0"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
			clipRule="evenodd"
		/>
	</svg>
);

export const Exclamation = (className?: string) => (
	<svg
		className={className}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
);

export const CheckCircle = (className?: string) => (
	<svg
		className={className}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
);

export const XCircle = (className?: string) => (
	<svg
		className={className}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
);

export const Backspace = (className?: string) => (
	<svg
		className={className}
		data-darkreader-inline-stroke=""
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
		/>
	</svg>
);

export const Enter = (className?: string) => (
	<svg
		className={className}
		style={{ transform: "rotate(180deg) scaleX(-1)" }}
		data-darkreader-inline-stroke=""
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
		/>
	</svg>
);
