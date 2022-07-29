import * as React from 'react';

function SvgMusicPlayer(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M4 3a1 1 0 011-1h6a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1V3zm1 0v3h6V3H5zm3 9a1 1 0 100-2 1 1 0 000 2z' />
			<path d='M11 11a3 3 0 11-6 0 3 3 0 016 0zm-3 2a2 2 0 100-4 2 2 0 000 4z' />
			<path d='M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2-1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z' />
		</svg>
	);
}

export default SvgMusicPlayer;
