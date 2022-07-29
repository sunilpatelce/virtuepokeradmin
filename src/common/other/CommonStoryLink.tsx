import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

interface ICommonStoryLinkProps {
	children: ReactNode;
	to: string;
	[key: string]: any;
}
const CommonStoryLink: FC<ICommonStoryLinkProps> = ({ to, children, ...props }) => {
	return (
		<a
			href={`${process.env.REACT_APP_STORYBOOK_URL}${to}`}
			target='_blank'
			rel='noreferrer'
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</a>
	);
};
CommonStoryLink.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired,
};

export default CommonStoryLink;
