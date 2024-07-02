'use client'
import React from 'react';
import styles from './UsersTable.module.css';
import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, User } from '@nextui-org/react';
import AlertsIcon from '@/core/icons/Alertsicon';
import { columns, users } from './data';

export interface UsersTableProps {
	// types...
}

const statusColorMap:any = {
	active: "success",
	paused: "danger",
	vacation: "warning",
  };


const UsersTable: React.FC<UsersTableProps>  = ({}) => {


	const renderCell = React.useCallback((user:any, columnKey:any) => {
		const cellValue = user[columnKey];
	
		switch (columnKey) {
		  case "name":
			return (
			  <User
				avatarProps={{radius: "lg", src: user.avatar}}
				description={user.email}
				name={cellValue}
			  >
				{user.email}
			  </User>
			);
		  case "role":
			return (
			  <div className="flex flex-col">
				<p className="text-bold text-sm capitalize">{cellValue}</p>
				<p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
			  </div>
			);
		  case "status":
			return (
			  <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
				{cellValue}
			  </Chip>
			);
		  case "actions":
			return (
			  <div className="relative flex items-center gap-2">
				<Tooltip content="Details">
				  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
					<AlertsIcon width={15}/>
				  </span>
				</Tooltip>
				<Tooltip content="Edit user">
				  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
					<AlertsIcon width={15}/>
				  </span>
				</Tooltip>
				<Tooltip color="danger" content="Delete user">
				  <span className="text-lg text-danger cursor-pointer active:opacity-50">
					<AlertsIcon />
				  </span>
				</Tooltip>
			  </div>
			);
		  default:
			return cellValue;
		}
	  }, []);



	return (
		<>
		<Table isHeaderSticky aria-label="Example table with custom cells" className='max-h-[80vh]'>
			<TableHeader columns={columns}>
				{(column) => (
				<TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
					{column.name}
				</TableColumn>
				)}
			</TableHeader>

			<TableBody items={users}>
				{(item) => (
				<TableRow key={item.id}>
					{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
				</TableRow>
				)}
			</TableBody>
			</Table>
		</>
	);
};

export default UsersTable;
