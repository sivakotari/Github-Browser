import React from 'react';
import {Table, Spin} from 'antd'

export default class TableComponent extends React.Component {
	constructor(props){
	  super(props);
	  this.state = {
	  	firstRender: true
	  };
	}
	componentDidUpdate(prevProps, prevState){
		this.state.firstRender &&
		this.setState({
			firstRender: false
		});
	}
  render() {
  	let {firstRender} = this.state;
    let {tableData} = this.props;
  	let tableColumns = [
			{
			  title: 'Name',
			  dataIndex: 'name',
			  key: 'name',
			  sorter: (a,b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : 0,
			  render: text => <code>{text}</code>
			}, {
			  title: 'Stars',
			  dataIndex: 'watchers_count',
			  key: 'watchers_count',
			  width: "15%",
			  sorter: (a,b) => a.watchers_count - b.watchers_count,
			  defaultSortOrder: 'descend',
			}, {
			  title: 'Forks',
			  dataIndex: 'forks_count',
			  key: 'forks_count',
			  width: "15%",
			  sorter: (a,b) => a.forks_count - b.forks_count,
			}, {
			  title: 'Action',
			  dataIndex: 'html_url',
			  key: 'html_url',
			  width: "15%",
			  render: text => <a href={text} target="_blank" rel="noopener noreferrer">View</a>
			}
		];

    return (
			<div className='tableComponent'>
				<div className="repos">{tableData.length || 0} public repositories</div>
				<Spin spinning={firstRender ? !firstRender : !tableData.length} tip="Loading...">
				<Table
					bordered
					columns={tableColumns}
					dataSource={tableData}
					pagination={false}
				/>
				</Spin>
			</div>
		)
  }
}