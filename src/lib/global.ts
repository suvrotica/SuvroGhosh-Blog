import { dev } from '$app/environment';
export const navStyle = 'flex flex-row justify-between m-1 bg-neutral-200 dark:bg-neutral-800';
export const ulStyle = 'flex flex-row gap-2 mt-1 ';
export const btnClass =
	'text-white dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm border-2 border-neutral-400 dark:border-neutral-600   px-3 py-3 m-1';
export const text_bg_color_style =
	'font-light text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300 bg-neutral-100 hover:bg-neutral-500 dark:bg-neutral-950 dark:hover:bg-neutral-900';

export const p_style =
	'mb-6 max-w-2xl text-justify font-light text-neutral-500 md:text-lg lg:mb-8 lg:text-xl dark:text-neutral-400';
export const a_style =
	'inline-flex items-center justify-center rounded-md border border-neutral-300 px-1  text-center text-base font-light text-neutral-900 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 dark:border-neutral-900 dark:text-white dark:hover:bg-neutral-700 dark:focus:ring-neutral-800';
export const h1_style =
	'mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white';
export const mode_style =
	'mt-4 lg:mt-0 bg-neutral-500 hover:bg-neutral-600 text-white font-bold p-2 rounded w-10 h-10 flex items-center justify-center';

export const title = 'Suvro Ghosh Blog | Satire | Technology Insights & Expert Opinions';
export const description =
	"Join Suvro Ghosh's journey through the evolving landscape of technology. This blog offers a blend of detailed tech tutorials, industry trend analyses, and personal stories, providing a unique view from a tech expert's lens. Stay ahead of the curve with insights into the latest developments and thoughtful perspectives on tech's impact in everyday life. Perfect for tech enthusiasts, professionals, and learners alike.";
export const url = dev ? 'http://localhost:5173/' : 'https://suvroghosh.blog/';
