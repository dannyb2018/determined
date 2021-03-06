import { ColumnType } from 'antd/es/table';

import {
  relativeTimeRenderer, stateRenderer, taskIdRenderer, taskTypeRenderer, userRenderer,
} from 'components/Table';
import { CommandTask } from 'types';
import {
  alphanumericSorter, commandSourceSorter, commandStateSorter, stringTimeSorter,
} from 'utils/data';

import { SourceInfo } from './TaskList';

export const columns: ColumnType<CommandTask>[] = [
  {
    dataIndex: 'id',
    key: 'id',
    render: taskIdRenderer,
    sorter: (a: CommandTask, b: CommandTask): number => alphanumericSorter(a.id, b.id),
    title: 'Short ID',
  },
  {
    key: 'type',
    render: taskTypeRenderer,
    sorter: (a: CommandTask, b: CommandTask): number => alphanumericSorter(a.type, b.type),
    title: 'Type',
  },
  {
    key: 'name',
    sorter: (a: CommandTask, b: CommandTask): number => alphanumericSorter(a.name, b.name),
    title: 'Name',
  },
  {
    key: 'startTime',
    render: (_: number, record: CommandTask): React.ReactNode =>
      relativeTimeRenderer(new Date(record.startTime)),
    sorter: (a: CommandTask, b: CommandTask): number => stringTimeSorter(a.startTime, b.startTime),
    title: 'Start Time',
  },
  {
    key: 'state',
    render: stateRenderer,
    sorter: (a: CommandTask, b: CommandTask): number => commandStateSorter(a.state, b.state),
    title: 'State',
  },
  {
    key: 'sources',
    sorter: (a: CommandTask, b: CommandTask): number => commandSourceSorter(a.misc, b.misc),
    title: 'Sources',
  },
  {
    key: 'user',
    render: userRenderer,
    sorter: (a: CommandTask, b: CommandTask): number => alphanumericSorter(a.username, b.username),
    title: 'User',
  },
  {
    align: 'right',
    className: 'fullCell',
    key: 'action',
    title: '',
  },
];

export const sourceColumns: ColumnType<SourceInfo>[] = [
  {
    key: 'name',
    sorter: (a: SourceInfo, b: SourceInfo): number => alphanumericSorter(a.label, b.label),
    title: 'Name',
  },
];
