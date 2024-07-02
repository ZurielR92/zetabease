import React from 'react';
import styles from './HeaderAdmin.module.css';
import LogoApp from '@/core/icons/LogoApp';
import { ThemeSelector } from '@/core/components/ThemeSelector';
import { AlertsDropdown } from '@/core/components/AlertsDropdown';

export interface HeaderAdminProps {
	// types...
}

const HeaderAdmin: React.FC<HeaderAdminProps>  = ({}) => {
	return (
		<header className={styles.headeradmin}>
 			<LogoApp width={150}/>
			<div className='flex gap-2'>
				<ThemeSelector/>
				<AlertsDropdown/>
			</div>
 		</header>
	);
};

export default HeaderAdmin;
