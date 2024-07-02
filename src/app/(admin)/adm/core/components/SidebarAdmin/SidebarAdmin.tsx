import React from 'react';
import styles from './SidebarAdmin.module.css';
import { Accordion, AccordionItem, Listbox, ListboxItem } from '@nextui-org/react';
import AlertsIcon from '@/core/icons/Alertsicon';
import Link from 'next/link';

export interface SidebarAdminProps {
	// types...
}

const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-2 data-[hover=true]:bg-default-300 rounded-lg flex items-center",
    indicator: "text-medium",
    content: "text-small px-0",
};

const SidebarAdmin: React.FC<SidebarAdminProps>  = ({}) => {
	return (
		<aside className={`${styles.sidebaradmin} max-sm:translate-x-[-256px] max-md:absolute `}>
			
			<Accordion 
				showDivider={false}
				itemClasses={ itemClasses }
			>
				<AccordionItem
					startContent={<AlertsIcon width={20}/>}
					title='Usuarios'
				>
					<Listbox>
						<ListboxItem as={Link} href='/adm/users' key={'clientes'}>Lista de Usuarios</ListboxItem>
					</Listbox>
				</AccordionItem>

				<AccordionItem
					startContent={<AlertsIcon width={20}/>}
					title='Config'
				>
					<Listbox>
						<ListboxItem key={'clientes'}>Clientes</ListboxItem>
						<ListboxItem key={'clientes'}>Staff</ListboxItem>
					</Listbox>
				</AccordionItem>
			</Accordion>

			
 		</aside>
	);
};

export default SidebarAdmin;
