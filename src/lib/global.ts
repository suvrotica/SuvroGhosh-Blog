import { dev } from '$app/environment';

// Define a type with an index signature for base styles.
type BaseStyle = {
	[key: string]: string;
};

// Base styles with an index signature
const baseStyles: BaseStyle = {
	padmar: 'p-2 m-2 ',
	shadowTop:
		'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] p-4 bg-white rounded-lg',

	shadow: 'shadow-lg dark:shadow-lg dark:shadow-neutral-900 shadow-neutral-800',
	image:
		'bg-blend-multiply m-auto p-[2px] bg-cover bg-center float-none rounded-lg  md:float-right  md:w-1/3',
	rounded: 'rounded-md',
	border: 'border-[1px] border-neutral-400 dark:border-neutral-600',
	text: 'text-neutral-800 dark:text-neutral-100 text-sm',
	bg: 'bg-neutral-100 dark:bg-neutral-800',
	grad1:
		'bg-gradient-to-r from-neutral-300 to-bg-neutral-100 dark:from-neutral-400 dark:to-bg-neutral-950',
	grad2:
		'bg-gradient-to-l from-neutral-300 to-bg-neutral-100 dark:from-neutral-800 dark:to-bg-neutral-950',
	hover: 'hover:bg-neutral-500 dark:hover:bg-neutral-700',
	font: 'font-thin'
};

// Functions to generate complex styles using base styles.
function generateStyle(classes: string[]): string {
	return classes.map((className) => baseStyles[className] ?? className).join(' ');
}

// Style strings for specific elements

export const sectionStyle = generateStyle([
	'mb-8',
	'mr-4',
	'clearfix',
	'overflow-auto',
	baseStyles.padmar,
	baseStyles.grad2
]);
export const divContainerStyle = 'mx-auto grid  p-4 lg:grid-cols-12 lg:gap-4 ';
export const divContentStyle = ' lg:col-span-7 mb-12';
export const divCarouselStyle = 'display:block lg:col-span-5 lg:mt-0 lg:flex ';

export const imgStyle = generateStyle(['mx-4', baseStyles.image, baseStyles.shadowTop]);
export const svgStyle = generateStyle([
	'my-2',
	'-mr-2',
	'h-auto',
	'w-[150px]',
	'rounded-sm',
	'bg-neutral-100',
	'p-0',
	baseStyles.shadow
]);

export const navStyle = generateStyle([
	'flex',
	'flex-row',
	'justify-between',
	'm-1',
	baseStyles.rounded,
	baseStyles.border,
	baseStyles.grad1
]);

export const ulStyle = generateStyle(['flex', 'flex-row', 'gap-2', 'mt-1']);
export const btnClass = generateStyle([
	baseStyles.text,
	baseStyles.bg,
	baseStyles.hover,
	baseStyles.border,
	baseStyles.font,
	'rounded-lg',
	'text-sm',
	'border-neutral-400',
	'dark:border-neutral-600',
	'px-2',
	'py-2',
	'mx-2',
	'my-auto'
]);

export const text_bg_color_style = generateStyle([
	baseStyles.font,
	'text-neutral-500',
	'hover:text-neutral-600',
	baseStyles.hover,
	baseStyles.bg,
	'dark:bg-neutral-950'
]);

export const preStyle = generateStyle([
	'text-md',
	'my-auto',
	baseStyles.rounded,
	baseStyles.bg,
	baseStyles.text,
	baseStyles.font,
	'px-2',
	'py-0',
	'bg-neutral-200',
	baseStyles.shadow
]);

export const pStyle = generateStyle([
	'text-justify',
	baseStyles.text,
	baseStyles.font,
	baseStyles.padmar,
	'md:text-base'
]);

export const a_style = generateStyle([
	'inline-flex',
	'justify-center',
	baseStyles.rounded,
	baseStyles.border,
	'px-1',
	baseStyles.font,
	baseStyles.text,
	baseStyles.grad1,
	baseStyles.hover,
	baseStyles.border,
	'focus:ring-4',
	'focus:ring-neutral-100',
	'dark:hover:bg-neutral-700',
	'dark:focus:ring-neutral-800',
	'my-3'
]);

export const h1_style = generateStyle([
	'mb-4',
	'max-w-2xl',
	'text-4xl',
	'font-extrabold',
	'leading-none',
	'tracking-tight',
	'md:text-5xl',
	'xl:text-6xl',
	'dark:text-white'
]);

export const mode_style = generateStyle([
	'mt-4',
	'lg:mt-0',
	baseStyles.bg,
	baseStyles.hover,
	'text-white',
	'font-bold',
	'p-2',
	baseStyles.rounded,
	'w-10',
	'h-10',
	'flex',
	'items-center',
	'justify-center'
]);

// Metadata
export const title = 'Suvro Ghosh Blog | Satire | Technology Insights & Expert Opinions';
export const description =
	"Join Suvro Ghosh's journey through the evolving landscape of technology. This blog offers a blend of detailed tech tutorials, industry trend analyses, and personal stories, providing a unique view from a tech expert's lens. Stay ahead of the curve with insights into the latest developments and thoughtful perspectives on tech's impact in everyday life. Perfect for tech enthusiasts, professionals, and learners alike.";
export const url = dev ? 'http://localhost:5173/' : 'https://suvroghosh.blog/';
