import React from 'react';

import './create-post.css';

function CreatePost({threadId, onClose, onSubmit}) {
	return (
		<form onSubmit={onSubmit}>
			<div className="create-post">
				<label htmlFor="replyTo">Reply to thread #:</label>
				<input type="text" id="replyTo" name="replyTo" value={threadId} readOnly/>

				<label htmlFor="displayName">Display name:</label>
				<input type="text" id="displayName" name="displayName" />

				<label htmlFor="message">Message:</label>
				<textarea id="message" name="message" />

				<div className="buttons">
					<input type="submit" onClick={onClose} value="Close" />
					<input type="submit" value="Submit" />
				</div>
			</div>
		</form>
	);
}

CreatePost.defaultProps = {
	threadId: ''
};

export default CreatePost;