import { css } from 'lit'

export const chatStyles = css`
	html {
		--scrollbarBG: #a1a1a1;
		--thumbBG: #6a6c75;
	}

	*::-webkit-scrollbar {
		width: 11px;
	}

	* {
		scrollbar-width: thin;
		scrollbar-color: var(--thumbBG) var(--scrollbarBG);
		--mdc-theme-primary: rgb(3, 169, 244);
		--mdc-theme-secondary: var(--mdc-theme-primary);
	}

	*::-webkit-scrollbar-track {
		background: var(--scrollbarBG);
	}

	*::-webkit-scrollbar-thumb {
		background-color: var(--thumbBG);
		border-radius: 6px;
		border: 3px solid var(--scrollbarBG);
	}

	a {
		color: var(--black);
		text-decoration: none;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 20px;
	}

	.last-message-ref {
		position: fixed;
		font-size: 20px;
		right: 40px;
		bottom: 100px;
		width: 50;
		height: 50;
		z-index: 5;
		opacity: 0;
		color: black;
		background-color: white;
		border-radius: 50%;
		transition: all 0.1s ease-in-out;
	}

	.last-message-ref:hover {
		cursor: pointer;
		transform: scale(1.1);
	}

	.chat-list {
		overflow-y: auto;
		overflow-x: hidden;
		height: 92vh;
		box-sizing: border-box;
	}

	.message-data {
		width: 92%;
		margin-bottom: 15px;
		margin-left: 55px;
	}

	.message-data-name {
		color: var(--black);
	}

	.message-data-time {
		color: #a8aab1;
		font-size: 13px;
		padding-left: 6px;
		padding-bottom: 4px;
	}

	.message-data-level {
		color: #03a9f4;
		font-size: 13px;
		padding-left: 8px;
		padding-bottom: 4px;
	}

	.chat-bubble-container {
		display:flex;
		gap: 7px;
	}

	.message-container {
		position: relative;
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: whitesmoke;
    border-radius: 5px;
    padding: 10px 15px;
    gap: 10px;
    margin-bottom: 20px;
	}

	.original-message {
    position: relative;
    color: black;
    line-height: 19px;
    overflow-wrap: break-word;
    user-select: text;
    font-size: 16px;
    width: 90%;
    border-radius: 5px;
    background-color: rgba(209, 209, 209, 0.79);
    padding: 8px 5px 8px 25px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.original-message:before {
		content: "";
    position: absolute;
    top: 5px;
    left: 10px;
    height: 75%;
    width: 2.6px;
    background-color: rgb(14, 190, 240);
	}

	.message {
		color: black;
		line-height: 19px;
		word-wrap: break-word;
		-webkit-user-select: text;
		-moz-user-select: text;
		-ms-user-select: text;
		user-select: text;
		font-size: 16px;
		width: 90%;
		position: relative;
	}

	.message-data-avatar {
		margin: 0px 8px 3px 3px;
		width: 42px; 
		height: 42px;
		float: left;
	}

	.message-parent:hover .chat-hover {
		display: block;
	}

	.message-parent:hover .message-container {
		filter:brightness(0.90);
	}

	.chat-hover {
		display: none;
		position: absolute;
		top: -38px;
		right: 20px;
	}

	.emoji {
		width: 1.7em;
		height: 1.5em;
		margin-bottom: -2px;
		vertical-align: bottom;
		object-fit: contain;
	}

	.my-message {
		background: #d1d1d1;
		border: 2px solid #eeeeee;
	}

	.other-message {
		background: #f1f1f1;
		border: 2px solid #dedede;
	}
	
	.align-left {
		text-align: left;
	}

	.align-right {
		text-align: right;
	}

	.float-left {
		float: left;
	}

	.float-right {
		float: right;
	}

	.clearfix:after {
		visibility: hidden;
		display: block;
		font-size: 0;
		content: " ";
		clear: both;
		height: 0;
	}

	img {
		border-radius: 25%;
	}

	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 5px;
		background-color: white;
		border: 1px solid #dad9d9;
		border-radius: 5px;
		height:100%;
		width: 100px;
		position: relative;
	}

	.menu-icon {
		width: 100%;
		padding: 5px;
		display: flex;
		align-items: center;
		font-size: 13px;
	}

	.menu-icon:hover {
		background-color: #dad9d9;
		transition: all 0.1s ease-in-out;
		cursor: pointer;
	}

	.tooltip {
		position: relative; 
	}

	.tooltip:before {
		content: attr(data-text); 
		position: absolute;
		top: -47px;
		left: 50%;
		transform: translateX(-50%);
		width: 90px;
		padding: 10px;
		border-radius: 10px;
		background:#fff;
		color: #000;
		text-align: center;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		font-size: 12px;
		z-index: 5;
		display: none; 
	}

	.tooltip:hover:before {
		display: block;
	}

	.tooltip:after {
		content: "";
		position: absolute;
		margin-top: -7px;
		top: -7px;
		border: 10px solid #fff;
		border-color: white transparent transparent transparent;
		z-index: 5;
		display: none;
	}

	.tooltip:hover:before, .tooltip:hover:after {
		display: block;
	}

	.block-user-container {
		display: block;
		position: absolute;
		left: -5px;
	}

	.block-user {
		justify-content: space-between;
		border: 1px solid rgb(218, 217, 217);
		border-radius: 5px;
		background-color: white;
		width: 90px;
		height: 32px;
		padding: 3px 8px;
		box-shadow: rgba(77, 77, 82, 0.2) 0px 7px 29px 0px;
	}
`
