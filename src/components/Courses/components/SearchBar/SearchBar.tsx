import React from 'react';
import Button from '../../../common/Button/Button';

import './search-bar.scss';

const SEARCH_BAR_PLACEHOLDER_TEXT = 'Enter course name or id...';
const SEARCH_BAR_BUTTON_TEXT = 'Search';

const SearchBar = () => {
	return (
		<div className='search-bar'>
			<input placeholder={SEARCH_BAR_PLACEHOLDER_TEXT} />
			<Button buttonText={SEARCH_BAR_BUTTON_TEXT} onClick={() => void 0} />
		</div>
	);
};

export default SearchBar;
