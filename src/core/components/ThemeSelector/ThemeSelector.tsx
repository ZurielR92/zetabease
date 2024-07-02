'use client'
import React from 'react';
import styles from './ThemeSelector.module.css';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import LightThemeIcon from '@/core/icons/LightThemeIcon';
import DarkThemeIcon from '@/core/icons/DarkThemeIcon';
import { useTheme } from '@/core/hooks/useTheme';
import { Themes } from '@/core/types/Themes.type';

export interface ThemeSelectorProps {
	// types...
}

const ThemeSelector: React.FC<ThemeSelectorProps>  = ({}) => {

	const { setTheme, theme } = useTheme();

	const setDefaultTheme = () => {
		const isDarkMode = window.matchMedia('(prefers-color: dark)').matches;
		if(isDarkMode) {
			setTheme(Themes.dark)
		} else {
			setTheme(Themes.light)
		}
	}
	
	return (
		<Dropdown>
 			<DropdownTrigger>
				<Button size='md' isIconOnly>
					{
						theme === 'light' ? (
							<LightThemeIcon width={25}/>
						) : (
							<DarkThemeIcon width={25}/>
						)
					}
				</Button>
			</DropdownTrigger>

			<DropdownMenu>
				<DropdownItem
					onClick={()=>setTheme(Themes.light)}
					startContent={<LightThemeIcon width={25}/>}
				>
					Tema Claro
				</DropdownItem>
				<DropdownItem
					onClick={()=>setTheme(Themes.dark)}
					startContent={<DarkThemeIcon width={25}/>}
				>
					Tema Oscuro
				</DropdownItem>
				<DropdownItem
				onClick={setDefaultTheme}
					startContent={<LightThemeIcon width={25}/>}
				>
					Predeterminado del Dispositivo
				</DropdownItem>
				
			</DropdownMenu>
 		</Dropdown>
	);
};

export default ThemeSelector;
