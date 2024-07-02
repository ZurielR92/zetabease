'use client'
import { ReactNode } from 'react';
import styles from './AppLayout.module.css';
import { useTheme } from '@/core/hooks/useTheme';
import { Themes } from '@/core/types/Themes.type';

export interface AppLayoutProps {
	children: ReactNode
	header?: ReactNode
	sidebar?: ReactNode
}

/**
 * El layout tiene configurada una grid con areas para el header y sidebar, se debe agregar la etiqueta css grid-area correspondiente al caso para el correcto posicionamiento de cada componente.
 * @param children -  Here is the content of each views
 * @returns 
 */
const AppLayout: React.FC<AppLayoutProps>  = ({ children, header, sidebar }) => {

	const { theme } = useTheme()

	return (
		<div 
			className={` ${theme==='light' ? Themes.light : Themes.dark} ${styles.applayout}`}>
			{header}
			{sidebar}
			<main>{children}</main>
 		</div>
	);
};

export default AppLayout;
