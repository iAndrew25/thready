import React from 'react';

import Author from '../author/author';

import './thread.css';

function Thread({data, id, addPost}) {
	return (
		<div className="thread">
			<p className="reply-to" onClick={() => addPost(id)}>#{id}</p>
			<div className="message">
				<Author {...data.author} />
				<div>
					{data.message}
					<div className="replies">
						{data.replies.map(reply => 
							<div key={reply.message} className="reply">
								<Author {...reply.author} />
								<div className="reply-message">
									{reply.message}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Thread;