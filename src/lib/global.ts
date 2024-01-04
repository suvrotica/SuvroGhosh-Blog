import { dev } from '$app/environment';
export const svgStyle =
	'my-2 -mr-2 ml-2 h-auto w-1/3  bg-neutral-100 p-0 shadow-lg md:w-1/6 lg:w-1/6';
export const navStyle =
	'flex flex-row justify-between m-2 bg-zinc-100 rounded-md border-2 border-neutral-400  dark:bg-zinc-950 dark:border-zinc-800 ';
export const ulStyle = 'flex flex-row gap-2 mt-1 ';
export const btnClass =
	'text-white dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm border-2 border-neutral-400 dark:border-neutral-600   px-2 py-2 mx-2 my-auto';
export const text_bg_color_style =
	'font-light text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300 bg-neutral-100 hover:bg-neutral-500 dark:bg-neutral-950 dark:hover:bg-neutral-900';
export const preStyle =
	'text-md my-auto rounded-md bg-neutral-800 px-2 py-0 font-bold text-neutral-200 shadow-lg shadow-neutral-800';
export const p_style =
	'mb-6 max-w-2xl text-justify font-light text-neutral-500 md:text-lg lg:mb-8 lg:text-xl dark:text-neutral-400';
export const a_style =
	'inline-flex items-center justify-center rounded-md border border-neutral-300 my-3 px-1  text-center text-base font-light text-neutral-900 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 dark:border-neutral-900 dark:text-white dark:hover:bg-neutral-700 dark:focus:ring-neutral-800';
export const h1_style =
	'mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white';
export const mode_style =
	'mt-4 lg:mt-0 bg-neutral-500 hover:bg-neutral-600 text-white font-bold p-2 rounded w-10 h-10 flex items-center justify-center';

export const title = 'Suvro Ghosh Blog | Satire | Technology Insights & Expert Opinions';
export const description =
	"Join Suvro Ghosh's journey through the evolving landscape of technology. This blog offers a blend of detailed tech tutorials, industry trend analyses, and personal stories, providing a unique view from a tech expert's lens. Stay ahead of the curve with insights into the latest developments and thoughtful perspectives on tech's impact in everyday life. Perfect for tech enthusiasts, professionals, and learners alike.";
export const url = dev ? 'http://localhost:5173/' : 'https://suvroghosh.blog/';
