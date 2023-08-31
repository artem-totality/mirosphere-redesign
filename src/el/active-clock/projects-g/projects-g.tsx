import React from 'react';
import plural from 'plural-ru';
import classes from '../active-clock.module.scss';

export interface IProjectsG {
	count?: string | number;
}

const ProjectsG: React.FC<IProjectsG> = ({ count = '0' }) => {
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
			<g transform="translate(140,382)">
				<text className={classes.clock__title}>
					<tspan textAnchor="middle">
						{plural(Number(count ?? 0), 'проект', 'проекта', 'проектов')}
					</tspan>
				</text>
			</g>
			<g transform="translate(82.8,409.6)">
				<text className={classes.clock__value}>
					<tspan textAnchor="middle">{count}</tspan>
				</text>
			</g>
		</>
	);
};

export default ProjectsG;
