const formatCreationDate = (dateWithSlashes: string): string =>
	dateWithSlashes.replace(/\//g, '.');

export default formatCreationDate;
