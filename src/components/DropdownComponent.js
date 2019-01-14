import React from 'react';
import { Select } from 'antd';

export default class DropdownComponent extends React.Component {
	render() {
		let {list,selectUser} = this.props;

		return(
      <Select placeholder="Select a User" style={{ width: 180 }} onChange={selectUser}>
      {
      	list.map((item,i) =>
      		<Select.Option key={i} value={item}>{item}</Select.Option>
      	)
      }
      </Select>
		)
	}
}