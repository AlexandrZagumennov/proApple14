export const enableScroll = () => {
	document.body.style.cssText = '';
	window.scroll({
		top: document.body.dbScrollY,
	});
};
