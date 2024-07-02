'use client'
import React from 'react';
import styles from './PaginationZ.module.css';
import { Pagination } from '@nextui-org/react';
import { useSearchParams } from '@/core/hooks/useSearchParams';

export interface PaginationZProps {
	// types...
}

const PaginationZ: React.FC<PaginationZProps>  = ({}) => {

	const { setSearchParam } = useSearchParams();

	return (
		<div className='m-auto max-w-96'>
			<Pagination
			total={100}
			showControls
			onChange={(page)=>setSearchParam({key:'page',value:page.toString()})}
			/>
		</div>
	);
};

export default PaginationZ;
