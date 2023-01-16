import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
	<Box
		sx={{
			boxShadow: 'none',
			borderRadius: '20px',
			display: 'flex',
			justifyContent: 'center',
			alighItems: 'center',
			width: { md: '320px', xs: '356px' },
			height: { md: '320px', xs: '356px' },
			margin: 'auto',
			marginTop,
		}}
	>
		<Link to={`/channel/${channelDetail?.id?.channelId}`}>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					color: '#fff',
				}}
			>
				<CardMedia
					image={
						channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
					}
					alt={channelDetail?.snippet?.title}
					sx={{
						width: '180px',
						height: '180px',
						borderRadius: '50%',
						border: '1px solid #e3e3e3',
					}}
				/>
				<Typography variant='h6'>
					{channelDetail?.snippet?.title}
					<CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
				</Typography>
				{channelDetail?.statistics?.subscriberCount && (
					<Typography variant='subtitle2'>
						{parseInt(
							channelDetail?.statistics?.subscriberCount
						).toLocaleString()}
						Subscribers
					</Typography>
				)}
			</CardContent>
		</Link>
	</Box>
);

export default ChannelCard;
