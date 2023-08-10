import React from 'react';
import Button from '../../../common/Button/Button';

import './search-bar.scss';
import SearchCoursesButton from './SearchCoursesButton/SearchCoursesButton';

const SEARCH_BAR_PLACEHOLDER_TEXT = 'Enter course name or id...';

const SearchBar = () => {
	return (
		<div className='search-bar'>
			<input placeholder={SEARCH_BAR_PLACEHOLDER_TEXT} />
			<SearchCoursesButton />
		</div>
	);
};

export default SearchBar;
