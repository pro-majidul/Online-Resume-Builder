

const SectionHeading = ( {title, subtitle, section}) => {
    return (
        <div className="space-y-1 mx-auto text-center container">
		<span className="p-2 mb-6 md:pb-14 text-lg md:text-2xl font-semibold tracking-wider text-center uppercase ${textColor}">{section}</span>
		<h2 className="mx-auto mt-4 md:mt-10 pb-3 lg:w-3xl font-bold text-3xl md:text-4xl lg:text-5xl">{title}</h2>
		<p className="mx-auto lg:w-5xl text-lg md:text-xl">{subtitle}</p>
	</div>
    );
};

export default SectionHeading;