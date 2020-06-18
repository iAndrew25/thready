import React from 'react';

import './author.css';

function Author({displayName, pictureUrl}) {
	return (
		<div className="author">
			<img alt={displayName} src={pictureUrl} />
			<div className="author-name">{displayName}</div>
		</div>
	);
}

Author.defaultProps = {
	displayName: '',
	pictureUrl: 'https://cdn3.iconfinder.com/data/icons/iconoid-ui-essentials/32/ui_user_account_person_username-512.png'
};

export default Author;