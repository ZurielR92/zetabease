'use client'
import React from 'react';
import styles from './AlertsDropdown.module.css';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import AlertsIcon from '@/core/icons/Alertsicon';

export interface AlertsDropdownProps {
	// types...
}

const AlertsDropdown: React.FC<AlertsDropdownProps>  = ({}) => {
	return (
		<Popover className={styles.alertsdropdown}>
 			<PopoverTrigger>
				<Button size='md' isIconOnly>
					<AlertsIcon width={25}/>
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<div className='p-4'>
					No tienes notificaciones
				</div>
			</PopoverContent>
 		</Popover>
	);
};

export default AlertsDropdown;
