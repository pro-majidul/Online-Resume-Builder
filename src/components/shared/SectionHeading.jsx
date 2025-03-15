

const SectionHeading = ( {title, subtitle, section}) => {
    return (
        <div className="container p-4 mx-auto my-10 space-y-1 text-center">
		<span className="text-xs font-semibold tracking-wider uppercase dark:text-violet-600">{section}</span>
		<h2 className="pb-3 text-2xl lg:w-3xl mx-auto font-bold md:text-4xl">{title}</h2>
		<p className="text-xs md:text-lg">{subtitle}</p>
	</div>
    );
};

export default SectionHeading;