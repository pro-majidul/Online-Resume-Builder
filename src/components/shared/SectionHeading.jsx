

const SectionHeading = ( {title, subtitle, section}) => {
    return (
        <div className="container  mx-auto  space-y-1 text-center">
		<span className="text-xs font-semibold tracking-wider uppercase ">{section}</span>
		<h2 className="pb-3 text-2xl lg:w-3xl mx-auto font-bold md:text-4xl">{title}</h2>
		<p className="text-xs lg:w-4xl mx-auto md:text-lg">{subtitle}</p>
	</div>
    );
};

export default SectionHeading;