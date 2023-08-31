import React, { useMemo } from 'react';
import classes from '../active-clock.module.scss';

export interface IActivityG {
	activity?: number;
}

const ActivityG: React.FC<IActivityG> = ({ activity = 0.1 }) => {
	const preparedActivity = useMemo(
		() => (activity > 1 ? 1 : activity),
		[activity]
	);

	return (
		<>
			<defs>
				<linearGradient
					id="a"
					x1="185.98"
					y1="239.93"
					x2="313.39"
					y2="239.93"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#d1bf73" />
					<stop offset="0.55" stopColor="#f9edad" />
					<stop offset="1" stopColor="#bfa759" />
				</linearGradient>
				<linearGradient
					id="text"
					x1="196.67"
					y1="396.57"
					x2="207.1"
					y2="396.57"
					xlinkHref="#a"
				/>
			</defs>
			<g transform="translate(137,423)">
				<text className={classes.clock__title}>
					<tspan textAnchor="middle">активность</tspan>
				</text>
			</g>
			<g transform="translate(205.8,403)">
				<text className={classes.clock__activity}>
					<tspan textAnchor="middle">
						{Math.round(preparedActivity * 100)}%
					</tspan>
				</text>
			</g>
		</>
	);
};

export default ActivityG;
