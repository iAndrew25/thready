import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Thread from './thread/thread';
import CreatePost from './create-post/create-post';

function App() {
	const autoThreadId = useRef(0);
	const [isCreatePostVisible, setIsCreatePostVisible] = useState(false);
	const [threadId, setThreadId] = useState();
	const [state, setState] = useState({});

	const showCreatePost = () => setIsCreatePostVisible(true);
	const hideCreatePost = () => setIsCreatePostVisible(false);

	const handleSubmitPost = event => {
		const {replyTo, displayName, message} = event.target;
		const replyToValue = replyTo.value;
		const displayNameValue = displayName.value;
		const messageValue = message.value;

		if(replyToValue && state[replyToValue]) {
			setState(currentState => ({
				...currentState,
				[replyToValue]: {
					...currentState[replyToValue],
					replies: [...currentState[replyToValue].replies, {
						message: messageValue,
						author: {
							displayName: displayNameValue
						}
					}]
				}
			}))
		} else {
			setState(currentState => ({
				...currentState,
				[autoThreadId.current]: {
					message: messageValue,
					replies: [],
					author: {
						displayName: displayNameValue
					}
				}
			}));

			autoThreadId.current++;
		}

		event.preventDefault();
		hideCreatePost();
	};

	const addPost = id => {
		!isNaN(id) ? setThreadId(id) : setThreadId();
		showCreatePost();
	};

	return (
		<div className="threads">
			<p><span onClick={addPost}>Create a new thread</span> or click to a thread # to leave a reply.</p>
			{isCreatePostVisible && <CreatePost threadId={threadId} onClose={hideCreatePost} onSubmit={handleSubmitPost} />}
			{Object.entries(state).map(([key, value]) => <Thread addPost={addPost} key={key} id={key} data={value} /> )}			
		</div>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);