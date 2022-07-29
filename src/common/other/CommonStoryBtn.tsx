import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/bootstrap/Button';

interface ICommonStoryBtnProps {
	to: string;
	[key: string]: any;
}
const CommonStoryBtn: FC<ICommonStoryBtnProps> = ({ to, ...props }) => {
	return (
		<Button
			color='storybook'
			icon='CustomStorybook'
			tag='a'
			target='_blank'
			isLight
			href={`${process.env.REACT_APP_STORYBOOK_URL}${to}`}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			Storybook
		</Button>
	);
};
CommonStoryBtn.propTypes = {
	to: PropTypes.string.isRequired,
};

export default CommonStoryBtn;
